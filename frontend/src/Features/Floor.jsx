import { useEffect, useState } from "react";
import ImageText from "../components/ImageText";
import axios from "axios";
import { API_LINK } from "../utils/api";

const Floor = () => {
  const [data, setData] = useState({
    image: "",
    description: "",
  });

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/api/v1/feature/getFloors`);
      setData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return <ImageText image={data.image} description={data.description} />;
};

export default Floor;
