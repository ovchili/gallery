import { filterType } from "types/filter.type";
import NumberFilter from "../NumberFilter/NumberFilter";
import SearchFilter from "../SearchFilter/SearchFilter";
import SelectFilter from "../SelectFilter/SelectFilter";
import style from "./FilterContainer.module.scss";
import { Dispatch, FC, SetStateAction } from "react";

type filtersType = {
	filter: filterType;
	setFilter: Dispatch<SetStateAction<filterType>>;
};
const FilterContainer: FC<filtersType> = ({ filter, setFilter }) => {
	/*const { data } = useQuery(["locations"], () => fetchLocations());*/

	return (
		<div className={style.filter__container}>
			<SearchFilter filter={filter} setFilter={setFilter} />
			<SelectFilter
				filter={filter}
				setFilter={setFilter}
				authors={true}
			/>
			<SelectFilter
				filter={filter}
				setFilter={setFilter}
				authors={false}
			/>

			<NumberFilter filter={filter} setFilter={setFilter} />
		</div>
	);
};
export default FilterContainer;
