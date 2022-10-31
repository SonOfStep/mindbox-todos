import React, { useEffect, useState } from "react";
import ButtonClearComleted from "./components/ButtonClearComleted";
import CountCompletedTodos from "./components/CountCompletedTodos";
import FilterTodos from "./components/FilterTodos";
import FormAddTodo from "./components/FormAddTodo";
import ListTodo from "./components/ListTodo";

export enum EStatus {
  COMPLETED = "completed",
  ACTIVE = "active",
}

export interface ITodo {
  id: number;
  text: string;
  status: EStatus;
}

const initialState: ITodo[] = [
  { id: 0, text: "Тестовое задание", status: EStatus.ACTIVE },
  { id: 1, text: "Красивый код", status: EStatus.COMPLETED },
  { id: 2, text: "Прокрытие тестами", status: EStatus.ACTIVE },
];

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialState);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);
  const [filterKey, setFilterKey] = useState<EStatus | undefined>(undefined);

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => todo.status !== filterKey));
  }, [todos, filterKey]);
  const addTodo = (value: string): void => {
    const text = value.trim();
    if (!text.length) return;
    setTodos((state) => [
      ...state,
      { id: todos.length, text, status: EStatus.ACTIVE },
    ]);
  };
  const clearCompleted = () => {
    setTodos((state) =>
      state.filter((todo) => todo.status !== EStatus.COMPLETED)
    );
  };
  const toggleStatus = (id: number): void => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          status:
            todo.status === EStatus.ACTIVE ? EStatus.COMPLETED : EStatus.ACTIVE,
        };
      })
    );
  };

  return (
    <main className="min-w-full bg-gray-300">
      {/* WRAPPER */}
      <div className="max-w-sm mx-auto p-2 space-y-4 min-h-screen ">
        {/* HEAD */}
        <h1 className="text-5xl text-center font-light lowercase text-gray-100">
          Todos
        </h1>
        <div className="bg-white">
          {/* ADD TODO */}
          <FormAddTodo addTodo={addTodo} />
          <div className="p-2">
            {/* TODO LIST  */}
            <ListTodo todos={filteredTodos} toggleStatus={toggleStatus} />
          </div>

          <div className="flex items-center justify-between p-2">
            <CountCompletedTodos
              count={
                todos.filter((todo) => todo.status !== EStatus.COMPLETED).length
              }
            />
            <FilterTodos filterKey={filterKey} setFilterKey={setFilterKey} />
            <ButtonClearComleted clearCompleted={clearCompleted} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
