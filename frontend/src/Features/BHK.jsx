import { useEffect, useState } from "react";
import ImageList from "../components/ImageList";
import axios from "axios";
import { API_LINK } from "../utils/api";

const BHK = () => {
  const [data, setData] = useState({
    image: "",
    bhk: [],
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
