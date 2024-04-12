import { useEffect, useState } from "react";
import ImageText from "../components/ImageText";
import axios from "axios";
import { API_LINK } from "../utils/api";
const Plans = () => {
  const [data, setData] = useState({
    image:
      "https://images.unsplash.com/photo-1711950901044-fa6215a9c59b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae labore enim impedit expedita repellat vero aspernatur animi vitae, porro dolorum nulla corrupti iure nihil quia! Provident pariatur quis veritatis sit aliquam. Deserunt error ducimus inventore explicabo, obcaecati illum eius voluptas architecto voluptatem tenetur maxime natus fugiat aliquam id vel provident.",
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
