import React from "react";
import { useState, useEffect } from "react";
import Title from "./components/Title";
import { API_LINK } from "./utils/api";
import axios from "axios";

const Broucher = () => {
  const [data, setData] = useState({
    image: "",
  });

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/api/v1/broucher/getBrouchers`);
      setData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-start items-center py-14 px-4">
      <div className="w-full text-center mb-10">
        <Title title={"BROUCHER"} />
      </div>
      <img src={data && data?.image} alt="" className="w-1500 md:w-96" />
    </section>
  );
};

export default Broucher;
