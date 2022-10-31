import React, { useState } from "react";

interface IProps {
  addTodo: (text: string) => void;
}

const FormAddTodo = ({ addTodo }: IProps) => {
  const [value, setValue] = useState<string>("");

  const handleValue = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        className="px-6 py-3 w-full rounded-lg"
        type="text"
        placeholder="What needs to be done?"
        onInput={handleValue}
        value={value}
      />
      <input type="submit" className="sr-only" />
    </form>
  );
};

export default FormAddTodo;
