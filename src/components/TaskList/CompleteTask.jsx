import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <>
      <div className="h-full w-[300px] bg-green-400 rounded-xl p-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-s, mt-2">{data.taskDescription}</p>
        <div className="mt-2">
          <button className="w-full">Completed</button>
        </div>
      </div>
    </>
  );
};

export default CompleteTask;
