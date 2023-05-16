import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, FC, SetStateAction, useState } from "react";
import style from "./SelectFilter.module.scss";
import clsx from "clsx";
import { filterType } from "types/filter.type";
import { MdClose } from "react-icons/md";

type filtersType = {
  authors: boolean;
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
};

const fetchAuthors = async (author: boolean) => {
  const { data } = await axios.get(
    `https://test-front.framework.team/${author ? `authors` : `locations`}`
  );

  return data;
};

const datas = (data: Array<any>, filter: filterType, authors: boolean) => {
  const filtered = data.filter((v) => {
    const find = authors ? filter.author : filter.location;
    return v.id === Number(find);
  });

  return filtered;
};
export const SelectFilter: FC<filtersType> = ({
  filter,
  setFilter,
  authors,
}) => {
  const { data } = useQuery([authors ? "authors" : "locations"], () =>
    fetchAuthors(authors)
  );

  let d = [];
  if (data) {
    d = datas(data, filter, authors);
  }

  const pr = d.length
    ? authors
      ? d[0].name
      : d[0].location
    : authors
    ? "Author"
    : "Location";

  const [show, setShow] = useState(false);
  const [text, setText] = useState(pr);

  const clearFilter = () => {
    setFilter((prev) => {
      authors
        ? ((prev as filterType).author = "")
        : ((prev as filterType).location = "");

      return { ...prev };
    });
    setText(authors ? "Authors" : "Location");
  };
  return (
    <div
      className={clsx(style.select__container, {
        [style.select__container_active]: show,
      })}
    >
      <div
        className={clsx(style.selected__text, { [style.active]: show })}
        onClick={() => setShow((prev) => !prev)}
      >
        {text}

        <MdClose
          onClick={clearFilter}
          className={clsx(style.delete, { [style.none]: d.length === 0 })}
        />
      </div>
      {show && (
        <ul className={style.select__options}>
          {data.map((option: any) => {
            return (
              <li
                className={style.select__option}
                data-name={authors ? option.name : option.location}
                key={option.id}
                onClick={(e) => {
                  setText(
                    (e.target as HTMLInputElement).getAttribute(
                      "data-name"
                    ) as string
                  );
                  setFilter((prev) => {
                    authors
                      ? ((prev as filterType).author = option.id)
                      : ((prev as filterType).location = option.id);

                    return { ...prev };
                  });
                  setShow(false);
                }}
              >
                {authors ? option.name : option.location}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SelectFilter;
