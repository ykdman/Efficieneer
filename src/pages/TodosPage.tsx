import React, { ChangeEvent, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const currentDate = new Date().toISOString().slice(0, 10);

const TodosPage = () => {
  const [date, setDate] = useState(currentDate);

  const handleDateSet = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <section
      id="todos"
      className="border w-max p-5 max-w-96 flex flex-col items-center"
    >
      <div>
        <div className="text-zinc-700 mb-4">
          <span className="font-extrabold ">Your Todo!</span>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="todo-date" className="mr-4 font-semibold">
              날짜 선택
            </label>
            <input
              type="date"
              name="todo-date"
              id="todo-date"
              value={date}
              onChange={handleDateSet}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="todo-thing">할 일 입력</label>
            <input
              type="text"
              name="todo-thing"
              id="todo-thing"
              className="border-none"
            />
            <div className="border mt-1 flex flex-row items-center justify-center outline-none p-1">
              <CiCirclePlus className="hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodosPage;
