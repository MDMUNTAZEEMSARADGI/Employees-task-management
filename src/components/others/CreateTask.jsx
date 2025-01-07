import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [userData, setUserData] = useContext(AuthContext);

  // -------------------logic--------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = [...userData]; // Make a copy of the userData to avoid mutating the context directly

    updatedData.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        if (!elem.tasks) {
          elem.tasks = [];
        }
        elem.tasks.push(newTask);

        if (!elem.taskSummary) {
          elem.taskSummary = { newTask: 0 };
        }
        elem.taskSummary.newTask = elem.taskSummary.newTask + 1;
      }
    });

    setUserData(updatedData);

    console.log(updatedData);

    // localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  // ---------------logic-----------------------------

  return (
    <>
      <div className=" p-5 bg-black mt-7 rounded">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-wrap items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-0.5">
                Task Title
              </h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                type="text"
                placeholder="Make the design, etc.."
                className="text-lg font-medium text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                type="date"
                placeholder=""
                className="text-white text-lg font-mediumpy-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-0.5">
                Asign To
              </h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                type="text"
                placeholder="Employee"
                className="text-lg font-medium text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-0.5">
                Category
              </h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                placeholder="Design, Dev, etc.."
                className="text-lg font-medium  text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-lg font-medium text-gray-300 mb-0.5">
              Description
            </h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full  text-white h-44 text-lg font-mediumpy-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 text-lg font-medium w-full rounded px-5 py-3 mt-4 hover:bg-emerald-600 ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
