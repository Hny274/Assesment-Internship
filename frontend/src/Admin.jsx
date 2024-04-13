import { useState } from "react";
import MainContent from "./Admin/MainContent";
import Sidebar from "./Admin/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Admin = () => {
  const [open, setOpen] = useState("");
  return (
    <div className="flex">
      <div className="md:hidden absolute top-5 left-5 z-20">
        {!open && (
          <GiHamburgerMenu
            size={26}
            className="text-white"
            onClick={() => setOpen(true)}
          />
        )}
        {open && (
          <IoClose
            size={30}
            className="text-white"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      <Sidebar open={open} />
      {!open && <MainContent />}
    </div>
  );
};

export default Admin;
