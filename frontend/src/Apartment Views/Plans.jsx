import { useEffect, useState } from "react";
import ImageText from "../components/ImageText";
import axios from "axios";
import { API_LINK } from "../utils/api";
const Plans = () => {
  const [data, setData] = useState({
    image: "",
    description: "",
  });

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/api/v1/apartment/getPlans`);
      setData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return <ImageText image={data?.image} description={data?.description} />;
};

export default Plans;
