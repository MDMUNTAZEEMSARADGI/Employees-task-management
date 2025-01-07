import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <>
      <div className=" bg-[#1c1c1c]">
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashboard;
