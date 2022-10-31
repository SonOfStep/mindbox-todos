import React from "react";
import { EStatus } from "../App";
interface IProps {
  filterKey: EStatus | undefined;
  setFilterKey: (status: EStatus | undefined) => void;
}
const FilterTodos = ({ filterKey, setFilterKey }: IProps): JSX.Element => {
  const filters = [
    { title: "All", value: undefined },
    { title: "Active", value: EStatus.ACTIVE },
    { title: "Completed", value: EStatus.COMPLETED },
  ];
  return (
    <div className="flex gap-1">
      {filters.map((filter) => (
        <button
          key={filter.title}
          onClick={() => {
            setFilterKey(filter.value);
          }}
          className={`text-gray-600 text-xs px-2 rounded ${
            filter.value === filterKey && "border border-gray-300"
          }`}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
};

export default FilterTodos;
