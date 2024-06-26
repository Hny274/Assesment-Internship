import { useState, useEffect } from "react";
import Title from "./components/Title";
import { API_LINK } from "./utils/api";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState({
    title: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/api/v1/project/getProjects`);
      setData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="md:min-h-[90vh] container mx-auto flex justify-center items-center w-full flex-col pt-20 md:py-14">
      <img
        src={data && data.image}
        alt=""
        className="w-[90%] md:w-[40%] object-cover"
      />
      <div className="w-[90%] md:w-[65%] flex justify-center items-center flex-col my-8 md:my-6">
        <Title title={data && data.title} />
        <p className="mt-4 text-justify">{data && data.description}</p>
      </div>
    </section>
  );
};

export default Main;
