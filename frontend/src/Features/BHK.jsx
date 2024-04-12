import { useEffect, useState } from "react";
import ImageList from "../components/ImageList";
import axios from "axios";
import { API_LINK } from "../utils/api";

const BHK = () => {
  const [data, setData] = useState({
    image:
      "https://images.unsplash.com/photo-1711950901044-fa6215a9c59b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bhk: ["Krish", "Krish2"],
  });

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/api/v1/feature/getBHKs`);
      setData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return <ImageList image={data.image} list={data.bhk} />;
};

export default BHK;
