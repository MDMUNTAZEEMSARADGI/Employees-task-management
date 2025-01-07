import React from "react";

const NewTask = ({ data }) => {
  return (
    <>
      <div className="h-full w-[300px] bg-blue-400 rounded-xl p-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-s, mt-2">{data.taskDescription}</p>

        <div className="mt-10 font-medium w-[15vh] bg-red-500 text-sm px-3 py-1 rounded">
          <button>Accept Task</button>
        </div>
      </div>
    </>
  );
};

export default NewTask;
