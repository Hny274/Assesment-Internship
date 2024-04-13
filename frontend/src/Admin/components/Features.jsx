import React, { useEffect, useState } from "react";
import UploadFile from "../../components/uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import Title from "./Title";

const Features = ({ id }) => {
  const advanceFeaturesList = [
    "Hospital",
    "School",
    "College",
    "Theatre",
    "Playground",
    "Swimming Pool",
  ];

  const [facing, setFacing] = useState({
    image: "",
    description: "",
    file: null,
  });

  const [bhk, setBHK] = useState({
    image: "",
    file: null,
    bhk: [],
  });

  const [floor, setFloor] = useState({
    image: "",
    description: "",
    file: null,
  });

  const [advanceFeatures, setAdvanceFeatures] = useState({
    advanceFeature: [],
    image: "",
    file: null,
  });

  const handleFacingFileChange = (file) => {
    setFacing((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleBHKFileChange = (file) => {
    setBHK((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleFloorFileChange = (file) => {
    setFloor((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleAdvanceFeatureFileChange = (file) => {
    setAdvanceFeatures((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleAdvanceFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (!advanceFeatures.advanceFeature) {
      setAdvanceFeatures((prevData) => ({
        ...prevData,
        advanceFeature: [],
      }));
    }
    if (checked) {
      setAdvanceFeatures((prevData) => ({
        ...prevData,
        advanceFeature: [...prevData.advanceFeature, value],
      }));
    } else {
      setAdvanceFeatures((prevData) => ({
        ...prevData,
        advanceFeature: prevData.advanceFeature.filter(
          (feature) => feature !== value
        ),
      }));
    }
  };

  useEffect(() => {
    getDataHandler();
  }, [id]);

  const getDataHandler = () => {
    const fetchFloorData = axios.get(`${API_LINK}/api/v1/feature/getFloors`);
    const fetchBHKData = axios.get(`${API_LINK}/api/v1/feature/getBHKs`);
    const fetchFacingData = axios.get(`${API_LINK}/api/v1/feature/getFacings`);
    const fetchAdvanceFeaturesData = axios.get(
      `${API_LINK}/api/v1/feature/getAdvanceFeatures`
    );

    Promise.all([
      fetchFloorData,
      fetchBHKData,
      fetchFacingData,
      fetchAdvanceFeaturesData,
    ])
      .then((responses) => {
        const [floorResp, bhkResp, facingResp, advanceFeaturesResp] = responses;
        setFloor(floorResp.data.data[0]);
        setBHK(bhkResp.data.data[0]);
        setFacing(facingResp.data.data[0]);
        setAdvanceFeatures(advanceFeaturesResp.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Adding Data...");

    const uploadToCloudinaryAndSetImage = async (file, setImage) => {
      if (file) {
        const image = await uploadToCloudinary(file);
        setImage((prevState) => ({ ...prevState, image }));
        return image;
      }
      return null;
    };

    try {
      const facingImage = await uploadToCloudinaryAndSetImage(
        facing.file,
        setFacing
      );
      const bhkImage = await uploadToCloudinaryAndSetImage(bhk?.file, setBHK);
      const floorImage = await uploadToCloudinaryAndSetImage(
        floor?.file,
        setFloor
      );
      const advanceFeaturesImage = await uploadToCloudinaryAndSetImage(
        advanceFeatures.file,
        setAdvanceFeatures
      );

      await axios.post(`${API_LINK}/api/v1/feature/addFacing`, {
        ...facing,
        image: facingImage || facing.image,
        projectId: id,
      });
      await axios.post(`${API_LINK}/api/v1/feature/addBHK`, {
        ...bhk,
        image: bhkImage || bhk?.image,
        projectId: id,
      });
      await axios.post(`${API_LINK}/api/v1/feature/addFloor`, {
        ...floor,
        image: floorImage || floor?.image,
        projectId: id,
      });
      await axios.post(`${API_LINK}/api/v1/feature/addAdvanceFeature`, {
        ...advanceFeatures,
        image: advanceFeaturesImage || advanceFeatures.image,
        projectId: id,
      });

      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  const changeRadioBhk = (e) => {
    const { value, checked } = e.target;
    if (!bhk.bhk) {
      setBHK((prevData) => ({
        ...prevData,
        bhk: [],
      }));
    }
    if (checked) {
      setBHK((prevData) => ({
        ...prevData,
        bhk: [...prevData.bhk, value],
      }));
    } else {
      setBHK((prevData) => ({
        ...prevData,
        bhk: prevData.bhk?.filter((bhkItem) => bhkItem !== value),
      }));
    }
  };

  return (
    <form className="w-[90%] md:w-[50%] mx-auto my-10" onSubmit={handleSubmit}>
      <Title title={"Facing of Building"} />
      <UploadFile setFile={handleFacingFileChange} image={facing?.image} />
      <div className="flex justify-start items-center flex-col my-8">
        <input
          type="text"
          name="facing"
          id="facing"
          value={facing?.description}
          onChange={(e) =>
            setFacing({ ...facing, description: e.target.value })
          }
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <Title title={"BHK Information"} />
      <UploadFile setFile={handleBHKFileChange} image={bhk?.image} />
      <div className="flex justify-start items-center flex-col my-8">
        <div className="flex justify-between items-center w-full">
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <div
                  className="flex justify-center items-center w-[1/4]"
                  key={index}
                >
                  <input
                    type="checkbox"
                    id={`${index + 1} BHK`}
                    name={`${index + 1} BHK`}
                    value={`${index + 1} BHK`}
                    checked={bhk?.bhk?.includes(`${index + 1} BHK`)}
                    onChange={changeRadioBhk}
                    className="bg-[#4d4d4d] rounded text-white/70 caret-white outline-none"
                  />
                  <label
                    htmlFor={`${index + 1} BHK`}
                    className="text-white/70 ml-2"
                  >
                    {`${index + 1} BHK`}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
      <Title title={"Floor"} />
      <UploadFile setFile={handleFloorFileChange} image={floor?.image} />
      <div className="flex justify-start items-center flex-col my-8">
        <input
          type="text"
          name="floor"
          id="floor"
          value={floor?.description}
          onChange={(e) => setFloor({ ...floor, description: e.target.value })}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <Title title={"Advance Features"} />
      <UploadFile
        setFile={handleAdvanceFeatureFileChange}
        image={advanceFeatures?.image}
      />
      <div className="flex justify-start items-center flex-col my-8">
        <div className="grid grid-cols-3 place-items-start gap-2 w-full">
          {advanceFeaturesList.map((item, index) => {
            return (
              <div
                className="flex justify-center items-center w-[1/4]"
                key={item}
              >
                <input
                  type="checkbox"
                  name={item}
                  id={item}
                  value={item}
                  checked={advanceFeatures?.advanceFeature?.includes(item)}
                  onChange={handleAdvanceFeatureChange}
                  className="bg-[#4d4d4d] rounded text-white/70 caret-white outline-none"
                />
                <label htmlFor={item} className="text-white/70 ml-2">
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 bg-[#4d4d4d] text-[#212020] font-semibold py-2 px-4 rounded w-[50%] md:w-[30%] mx-auto block"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Features;
