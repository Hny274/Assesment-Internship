import { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK } from "../utils/api";

const Views = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    GetDataHandler();
  }, []);

  const GetDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/api/v1/apartment/getImages`);
      setImages(resp.data.data[0].images);
    } catch (error) {
      console.log(error);
    }
  };

  const replaceImage = (img, index) => {
    let dummyImages = [...images];
    dummyImages[0] = img;
    dummyImages[index] = images[0];
    setImages(dummyImages);
  };

  return (
    <div className="flex flex-col mx-auto w-full justify-center items-center">
      <img src={images[0]} alt="" className="h-[200px] w-[90%] object-cover" />
      <div className="grid grid-cols-2 grid-row-2 md:grid-cols-4 gap-4 w-[90%] mt-[16px]">
        {Array(4)
          .fill(0)
          .map((_, index) => {
            return (
              <img
                src={images[index + 1]}
                key={index}
                className="w-full aspect-square object-cover cursor-pointer"
                onClick={() => replaceImage(images[index + 1], index + 1)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Views;
