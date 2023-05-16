import Card from "../Card/Card";
import style from "./CardContainer.module.scss";
import axios from "axios";
import { pictureType } from "types/pictures.type";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../Pagination/Pagination";
import { filterType } from "types/filter.type";
import FilterContainer from "../Filters/FilterContainer/FilterContainer";
import { useState } from "react";

const fetchPic = async ({
	location,
	author,
	query,
	created__gte,
	created__lte,
}: filterType) => {
	const { data } = await axios.get<pictureType[]>(
		`https://test-front.framework.team/paintings?_expand=author&_expand=location${
			location ? `&locationId=${location}` : ""
		}${author ? `&authorId=${author}` : ""}${query ? `&q=${query}` : ""}${
			created__gte ? `&created_gte=${created__gte}` : ""
		}${created__lte ? `&created_lte=${created__lte}` : ""}`
	);

	return data;
};

const CardContainer = () => {
	const [page, setPage] = useState(0);
	const picturesPerPage = 6;
	const pagesVisited = page * picturesPerPage;
	let pageCount = 0;
	let displayPictures: pictureType[] = [];
	const [filter, setFilter] = useState<filterType>({
		author: "",
		location: "",
		query: "",
		created__lte: "",
		created__gte: "",
	});

	const { data, isLoading, isError } = useQuery(
		["picture", filter],
		() => fetchPic({ ...filter }),
		{ keepPreviousData: true }
	);

	if (isLoading) {
		return <p>Loading ...</p>;
	}

	if (isError) {
		return <p>Произошла ошибка</p>;
	}
	if (data) {
		displayPictures = data.slice(
			pagesVisited,
			pagesVisited + picturesPerPage
		);
		pageCount = Math.ceil(data.length / picturesPerPage);
	}

	const display = displayPictures.length === 0;
	return (
		<>
			<FilterContainer setFilter={setFilter} filter={filter} />
			<div className={style.card__container}>
				{display ? (
					<p>Картин не найдено</p>
				) : (
					displayPictures.map((picture) => (
						<Card key={picture.id} picture={picture} />
					))
				)}
			</div>
			{display ? (
				""
			) : (
				<Pagination
					page={page}
					setPage={setPage}
					pageCount={pageCount}
				/>
			)}
		</>
	);
};

export default CardContainer;
