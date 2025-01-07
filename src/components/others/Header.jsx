import React, { useState } from "react";

const Header = (props) => {
  // const [username, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  // window.location.reload(); //To reload the site

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <>
      <div className="w-screen flex items-end justify-between p-10">
        <h1 className="text-xl text-white font-medium">
          <span className="text-emerald-600"> H</span>ello <br />
          <span className="text-2xl text-white font-semibold">
            <span className="text-emerald-600">U</span>sername
          </span>
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-500 text-white font-medium text-xl p-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
