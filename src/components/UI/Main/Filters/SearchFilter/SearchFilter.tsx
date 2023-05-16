import { filterType } from "types/filter.type";
import style from "./SearchFilter.module.scss";
import { Dispatch, FC, SetStateAction } from "react";

type filtersType = {
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
};

const SearchFilter: FC<filtersType> = ({ filter, setFilter }) => {
  return (
    <input
      type="search"
      placeholder="Name"
      className={style.searchFilter}
      onChange={(e) => {
        setFilter((prev) => {
          prev.query = e.target.value;

          return { ...prev };
        });
      }}
      value={filter.query}
    />
  );
};
export default SearchFilter;
