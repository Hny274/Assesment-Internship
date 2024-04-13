import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="md:shadow-md py-1">
      <div className="flex justify-end items-center mx-6 py-3 absolute top-4 right-6 md:hidden">
        {!open && <GiHamburgerMenu size={26} onClick={() => setOpen(true)} />}
        {open && <IoClose size={30} onClick={() => setOpen(false)} />}
      </div>
      <ul
        className={`w-full h-[100vh] md:h-auto ${
          open ? "flex md:flex" : "hidden md:flex"
        } justify-center md:justify-end items-center flex-col md:flex-row select-none`}
      >
        <li className="mx-4 p-3 font-medium cursor-pointer">Home</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Companies</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Projects</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Property</li>
        <li className="mx-4 p-3 font-medium cursor-pointer">Contact Us</li>
      </ul>
    </section>
  );
};

export default Navbar;
