import React from "react";
import { ITodo } from "../App";
import ItemListTodo from "./ItemListTodo";

interface IProps {
  todos: ITodo[];
  toggleStatus: (id: number) => void;
}

const EmptyList = (): JSX.Element => {
  return (
    <div className="mb-4 flex flex-col gap-4 items-center">
      <svg
        className="w-24 h-24"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.30857 12.6561L11.3086 14.6561L15.3086 10.6561M8.14357 5.3531C8.86087 5.29585 9.54185 5.0138 10.0896 4.5471C10.7085 4.01937 11.4952 3.72949 12.3086 3.72949C13.1219 3.72949 13.9087 4.01937 14.5276 4.5471C15.0753 5.0138 15.7563 5.29585 16.4736 5.3531C17.2843 5.4176 18.0455 5.76893 18.6206 6.34402C19.1957 6.91912 19.5471 7.68035 19.6116 8.4911C19.6688 9.20841 19.9509 9.88938 20.4176 10.4371C20.9453 11.056 21.2352 11.8427 21.2352 12.6561C21.2352 13.4695 20.9453 14.2562 20.4176 14.8751C19.9509 15.4228 19.6688 16.1038 19.6116 16.8211C19.5471 17.6319 19.1957 18.3931 18.6206 18.9682C18.0455 19.5433 17.2843 19.8946 16.4736 19.9591C15.7563 20.0164 15.0753 20.2984 14.5276 20.7651C13.9087 21.2928 13.1219 21.5827 12.3086 21.5827C11.4952 21.5827 10.7085 21.2928 10.0896 20.7651C9.54185 20.2984 8.86087 20.0164 8.14357 19.9591C7.33282 19.8946 6.57159 19.5433 5.99649 18.9682C5.42139 18.3931 5.07007 17.6319 5.00557 16.8211C4.94832 16.1038 4.66627 15.4228 4.19957 14.8751C3.67184 14.2562 3.38196 13.4695 3.38196 12.6561C3.38196 11.8427 3.67184 11.056 4.19957 10.4371C4.66627 9.88938 4.94832 9.20841 5.00557 8.4911C5.07007 7.68035 5.42139 6.91912 5.99649 6.34402C6.57159 5.76893 7.33282 5.4176 8.14357 5.3531V5.3531Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span className="text-3xl">The todo list is empty</span>
    </div>
  );
};

const ListTodo = ({ todos, toggleStatus }: IProps): JSX.Element => {
  return (
    <>
      {!todos.length && <EmptyList />}
      <ul className="flex flex-col gap-2 divide-y">
        {todos.map((todo) => (
          <ItemListTodo key={todo.id} todo={todo} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </>
  );
};

export default ListTodo;
