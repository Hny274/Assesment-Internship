import { useEffect, useState } from "react";
import ImageList from "../components/ImageList";
import axios from "axios";
import { API_LINK } from "../utils/api";

const AdvanceFeature = () => {
  const [data, setData] = useState({
    image: "",
    advanceFeature: [],
  });

  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/api/v1/feature/getAdvanceFeatures`
      );
      setData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return <ImageList image={data.image} list={data.advanceFeature} />;
};

export default AdvanceFeature;
