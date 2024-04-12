import { useState } from "react";
import Button from "./components/Button";
import Floor from "./Features/Floor";
import Facing from "./Features/Facing";
import BHK from "./Features/BHK";
import AdvanceFeature from "./Features/AdvanceFeature";

const Features = () => {
  const [active, setActive] = useState("Facing");
  return (
    <section className="min-h-[100vh] container mx-auto flex justify-start items-center w-full flex-col pb-14">
      <div className="grid grid-cols-4 my-7 w-[70%] gap-7">
        <Button
          title={"Facing"}
          active={active === "Facing"}
          setActive={setActive}
        />
        <Button title={"BHK"} active={active === "BHK"} setActive={setActive} />
        <Button
          title={"Floor"}
          active={active === "Floor"}
          setActive={setActive}
        />
        <Button
          title={"Advance Feature"}
          active={active === "Advance Feature"}
          setActive={setActive}
        />
      </div>
      <div className="my-8 w-[80%]">
        {active === "Facing" && <Facing />}
        {active === "BHK" && <BHK />}
        {active === "Floor" && <Floor />}
        {active === "Advance Feature" && <AdvanceFeature />}
      </div>
    </section>
  );
};

export default Features;
