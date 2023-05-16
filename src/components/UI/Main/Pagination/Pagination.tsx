import { Dispatch, FC, SetStateAction, useState } from "react";
import style from "./pagination.module.scss";
import { paginator, range } from "utils/helpers";
import { clsx } from "clsx";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

type PaginationType = {
  pageCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<PaginationType> = ({ pageCount, page, setPage }) => {
  const pages: number[] = paginator(0, pageCount - 1, page, 3);

  const disabledPrev = page === 0;
  const disabledNext = page === pageCount - 1;
  return (
    <ul className={style.pagination__container}>
      <li
        className={clsx(style.pagination__ceil, {
          [style.pagination__ceil_disabled]: disabledPrev,
        })}
        onClick={() => setPage(0)}
      >
        <MdKeyboardDoubleArrowLeft />
      </li>
      <li
        className={clsx(style.pagination__ceil, {
          [style.pagination__ceil_disabled]: disabledPrev,
        })}
        onClick={() => setPage((prev) => (disabledPrev ? prev : prev - 1))}
      >
        <MdKeyboardArrowLeft />
      </li>
      {pages.map((p) => (
        <li
          className={clsx(
            style.pagination__ceil,
            p === page ? style.pagination__ceil_active : ""
          )}
          key={p}
          onClick={() => setPage(p)}
        >
          {p + 1}
        </li>
      ))}

      <li
        className={clsx(style.pagination__ceil, {
          [style.pagination__ceil_disabled]: disabledNext,
        })}
        onClick={() => setPage((prev) => (disabledNext ? prev : prev + 1))}
      >
        <MdKeyboardArrowRight />
      </li>
      <li
        className={clsx(style.pagination__ceil, {
          [style.pagination__ceil_disabled]: disabledNext,
        })}
        onClick={() => setPage(pageCount - 1)}
      >
        <MdKeyboardDoubleArrowRight />
      </li>
    </ul>
  );
};
export default Pagination;
