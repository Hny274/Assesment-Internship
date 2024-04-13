import React, { useState } from "react";

const Sidebar = ({ open }) => {
  const [active, setActive] = useState("Completed Projects");
  return (
    <section
      className={`w-full flex flex-col ${
        open ? "flex" : "hidden md:flex"
      } md:w-[20%] h-[100vh] bg-[#313131]`}
    >
      <div className="flex justify-center items-center flex-col h-[80vh]">
        <button
          onClick={() => setActive("Completed Projects")}
          className={`p-2 ${
            active !== "Completed Projects"
              ? "bg-[#4d4d4d] text-white"
              : "bg-[#fff] text-[#4d4d4d]"
          }  font-medium rounded-md sidebarBtn w-[80%] mb-6`}
        >
          Completed Projects
        </button>
        <button
          onClick={() => setActive("Under Construction")}
          className={`p-2 ${
            active !== "Under Construction"
              ? "bg-[#4d4d4d] text-white"
              : "bg-[#fff] text-[#4d4d4d]"
          }  font-medium rounded-md sidebarBtn w-[80%] mb-6`}
        >
          Under Construction
        </button>
        <button
          onClick={() => setActive("Ready to move in")}
          className={`p-2 ${
            active !== "Ready to move in"
              ? "bg-[#4d4d4d] text-white"
              : "bg-[#fff] text-[#4d4d4d]"
          }  font-medium rounded-md sidebarBtn w-[80%] mb-6`}
        >
          Ready to move in
        </button>
        <button
          onClick={() => setActive("Upcoming projects")}
          className={`p-2 ${
            active !== "Upcoming projects"
              ? "bg-[#4d4d4d] text-white"
              : "bg-[#fff] text-[#4d4d4d]"
          }  font-medium rounded-md sidebarBtn w-[80%] mb-6`}
        >
          Upcoming projects
        </button>
      </div>
      <div className="flex justify-center items-center flex-col h-[20vh]">
        <button
          onClick={() => setActive("Profile")}
          className={`p-2 ${
            active !== "Profile"
              ? "bg-[#4d4d4d] text-white"
              : "bg-[#fff] text-[#4d4d4d]"
          }  font-medium rounded-md sidebarBtn w-[80%] mb-6`}
        >
          Profile
        </button>
        <button
          onClick={() => setActive("Logout")}
          className={`p-2 ${
            active !== "Logout"
              ? "bg-[#4d4d4d] text-white"
              : "bg-[#fff] text-[#4d4d4d]"
          }  font-medium rounded-md sidebarBtn w-[80%] mb-6`}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
