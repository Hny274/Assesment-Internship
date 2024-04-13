import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Plans from "./Apartment Views/Plans";
import Views from "./Apartment Views/Views";
import Facilities from "./Apartment Views/Facilities";

const ApartmentViews = () => {
  const [active, setActive] = useState("Plans");
  return (
    <section className="min-h-[100vh] flex justify-start items-center w-full flex-col bg-[#d9d9d9] py-14">
      <div className="w-full container flex justify-center items-center flex-col">
        <Title title={"APARTMENT VIEWS"} />
        <div className="grid grid-cols-3 my-7 w-[90%] md:w-[50%] gap-6">
          <Button
            title={"Plans"}
            active={active === "Plans"}
            setActive={setActive}
          />
          <Button
            title={"Views"}
            active={active === "Views"}
            setActive={setActive}
          />
          <Button
            title={"Facilities"}
            active={active === "Facilities"}
            setActive={setActive}
          />
        </div>
        <div className="my-8 w-[80%]">
          {active === "Plans" && <Plans />}
          {active === "Views" && <Views />}
          {active === "Facilities" && <Facilities />}
        </div>
      </div>
    </section>
  );
};

export default ApartmentViews;
