import { useState } from "react";
import AprtmentViews from "./components/AprtmentViews";
import Features from "./components/Features";
import Main from "./components/Main";
import Broucher from "./components/Broucher";

const MainContent = () => {
  const [id, setId] = useState("");
  return (
    <div className="bg-[#212020] w-[80%] overflow-y-scroll max-h-[100vh]">
      <Main setId={setId} />
      <Features id={id} />
      <AprtmentViews id={id} />
      <Broucher id={id} />
    </div>
  );
};

export default MainContent;
