import { Dispatch, FC, SetStateAction, useState } from "react";
import style from "./NumberFilter.module.scss";
import clsx from "clsx";
import { filterType } from "types/filter.type";
type filtersType = {
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
};
const NumberFilter: FC<filtersType> = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={clsx(style.container, { [style.container__open]: isOpen })}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        if (target.tagName !== "P") return;

        setIsOpen((prev) => !prev);
      }}
    >
      <p className={style.text}>Created</p>
      <div className={style.input__container}>
        <input
          type="text"
          className={style.number}
          placeholder="from"
          onChange={(e) => {
            setFilter((prev) => {
              prev.created__gte = e.target.value;
              return { ...prev };
            });
          }}
          value={filter.created__gte}
        />
        <span> - </span>
        <input
          type="text"
          className={style.number}
          placeholder="before"
          onChange={(e) => {
            setFilter((prev) => {
              prev.created__lte = e.target.value;
              return { ...prev };
            });
          }}
          value={filter.created__lte}
        />
      </div>
    </div>
  );
};

export default NumberFilter;
