import { useState } from "react";
import AprtmentViews from "./components/AprtmentViews";
import Features from "./components/Features";
import Main from "./components/Main";
import Broucher from "./components/Broucher";

const MainContent = () => {
  const [id, setId] = useState("");
  return (
    <div className="bg-[#212020] w-full md:w-[80%] overflow-y-scroll max-h-[100vh]">
      <h1 className="text-center text-4xl font-bold text-white mt-10">
        Admin Panel
      </h1>
      <Main setId={setId} />
      <div className="border-b-2 mt-10 border-[#4d4d4d]"></div>
      <Features id={id} />
      <div className="border-b-2 mt-10 border-[#4d4d4d]"></div>
      <AprtmentViews id={id} />
      <div className="border-b-2 mt-10 border-[#4d4d4d]"></div>
      <Broucher id={id} />
    </div>
  );
};

export default MainContent;
