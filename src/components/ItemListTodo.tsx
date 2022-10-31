import React from "react";
import { EStatus, ITodo } from "../App";

interface IProps {
  todo: ITodo;
  toggleStatus: (id: number) => void;
}

const ItemListTodo = ({ todo, toggleStatus }: IProps): JSX.Element => {
  const handleToggleStatus = () => {
    toggleStatus(todo.id);
  };
  return (
    <li className="flex gap-2 align-center py-2 ">
      <label>
        <div className="flex items-center justify-center rounded-full p-1 w-6 h-6 border border-gray-300">
          {todo.status === EStatus.COMPLETED && (
            <svg
              className="w-6 h-6"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 39L27 51L57 21"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <input
          className="sr-only"
          type="checkbox"
          onChange={handleToggleStatus}
          checked={todo.status === EStatus.COMPLETED}
        />
      </label>
      <span className="">{todo.text}</span>
    </li>
  );
};

export default ItemListTodo;
