import React from "react";
interface IProps {
  clearCompleted: () => void;
}
const ButtonClearComleted = ({ clearCompleted }: IProps): JSX.Element => {
  return (
    <button className="text-gray-600 text-xs" onClick={clearCompleted}>
      Clear completed
    </button>
  );
};

export default ButtonClearComleted;
