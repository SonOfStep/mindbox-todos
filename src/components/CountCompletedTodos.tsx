import React from "react";

interface IProps {
  count: number;
}

const CountCompletedTodos = ({ count }: IProps): JSX.Element => {
  return <span className="text-gray-600 text-xs">{count} items left</span>;
};

export default CountCompletedTodos;
