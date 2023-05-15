import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.scss";
import axios from "axios";
import { picture } from "types/pictures.type";
import { useQuery } from "@tanstack/react-query";

const fetchPic = async (page: number) => {
  const limit: number = 6;
  const { data, headers } = await axios.get<picture[]>(
    `https://test-front.framework.team/paintings?_expand=author&_expand=location&_page=${page}&_limit=${limit}`
  );

  const pictures = data;
  const totalCount = headers["x-total-count"] as number;
  const maxPages = Math.ceil(totalCount / limit);

  return { pictures, maxPages };
};
const CardContainer = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(["picture", page], () => fetchPic(page));

  return (
    <>
      <div className={style.card__container}>
        {data?.pictures.map((picture) => (
          <Card key={picture.id} picture={picture} />
        ))}
      </div>

      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => (prev !== 1 ? prev - 1 : prev))}
      >
        Prev
      </button>
      <button
        disabled={page === data?.maxPages}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
};
export default CardContainer;
