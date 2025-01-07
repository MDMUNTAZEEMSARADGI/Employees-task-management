import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <>
      <div className="flex mt-10 justify-between gap-5 screen">
        <div className="bg-blue-500 w-[45%] px-9 py-6 rounded-xl">
          <h2 className="text-3xl">{data.taskSummary.newTask}</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="bg-yellow-500 w-[45%] px-9 py-6 rounded-xl">
          <h2 className="text-3xl">{data.taskSummary.active}</h2>
          <h3 className="text-xl font-medium">Active Task</h3>
        </div>
        <div className="bg-green-500 w-[45%] px-9 py-6 rounded-xl">
          <h2 className="text-3xl">{data.taskSummary.completed}</h2>
          <h3 className="text-xl font-medium">Completed Task</h3>
        </div>
        <div className="bg-red-500 w-[45%] px-9 py-6 rounded-xl">
          <h2 className="text-3xl">{data.taskSummary.failed}</h2>
          <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
