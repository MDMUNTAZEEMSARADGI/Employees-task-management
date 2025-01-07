import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <>
      <div id="alltask" className="p-5 w-full rounded mt-5  bg-[#1c1c1c]">
        <div className="mb-2 py-2 px-4 bg-emerald-500 flex justify-between rounded">
          <h2 className="text-[3vh] font-medium w-1/5 text-black">
            Employees Name
          </h2>
          <h4 className="text-[3vh] font-medium w-1/5  text-black">New Task</h4>
          <h4 className="text-[3vh] font-medium w-1/5  text-black">
            Active Task
          </h4>
          <h4 className="text-[3vh] font-medium w-1/5 text-black">Completed</h4>
          <h4 className="text-[3vh] font-medium w-1/5 text-black ">Failed</h4>
        </div>
        <div className="">
          {userData.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="mb-2 py-2 px-4 bg-black flex justify-between rounded"
              >
                <h2 className="text-lg font-medium w-1/5 text-white">
                  {elem.firstName}
                </h2>
                <h3 className="text-lg font-medium w-1/5 text-blue-600">
                  {elem.taskSummary.newTask}
                </h3>
                <h4 className="text-lg font-medium  w-1/5 text-yellow-600">
                  {elem.taskSummary.active}
                </h4>
                <h4 className="text-lg font-medium  w-1/5 text-green-600">
                  {elem.taskSummary.completed}
                </h4>
                <h4 className="text-lg font-medium  w-1/5 text-red-600">
                  {elem.taskSummary.failed}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTask;
