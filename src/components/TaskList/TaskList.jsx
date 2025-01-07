import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div
        id="tasklist"
        className="w-full h-[50%] py-5 mt-10 flex items-center justify-start gap-5 overflow-x-auto"
      >
        {data.tasks.map((elem, idx) => {
          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />;
          }
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />;
          }
          if (elem.Completed) {
            return <CompleteTask key={idx} data={elem} />;
          }
          if (elem.Failed) {
            return <FailedTask key={idx} data={elem} />;
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
