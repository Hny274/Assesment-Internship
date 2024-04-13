import React, { useEffect, useState } from "react";
import UploadFile from "../../components/uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import toast from "react-hot-toast";
import MultipleUploadFile from "../../components/multipleUploadFile";
import Title from "./Title";

const AprtmentViews = ({ id }) => {
  const facilitiesList = [
    "Security",
    "Lift",
    "Car Parking",
    "Park",
    "Playground",
    "Swiming Pool",
  ];
  const [plans, setPlans] = useState({
    image: "",
    file: null,
    description: "",
  });

  const [views, setViews] = useState({
    images: [],
    files: null,
  });

  const [facilitiesdata, setFacilities] = useState({
    image: "",
    file: null,
    facilities: [],
  });

  const handlePlansFileChange = (file) => {
    setPlans((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleViewsFileChange = (files) => {
    setViews((prevData) => ({
      ...prevData,
      files: files,
    }));
  };

  const handleFacilitiesFileChange = (file) => {
    setFacilities((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const changeFacility = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFacilities((prevData) => ({
        ...prevData,
        facilities: [...prevData.facilities, value],
      }));
    } else {
      setFacilities((prevData) => ({
        ...prevData,
        facilities: prevData.facilities.filter((bhkItem) => bhkItem !== value),
      }));
    }
  };

  useEffect(() => {
    getDataHandler();
  }, [id]);

  const getDataHandler = async () => {
    try {
      const [plansResp, viewsResp, facilitiesResp] = await Promise.all([
        axios.get(`${API_LINK}/api/v1/apartment/getPlans`),
        axios.get(`${API_LINK}/api/v1/apartment/getImages`),
        axios.get(`${API_LINK}/api/v1/apartment/getFacilities`),
      ]);

      if (plansResp.data.data[0]) setPlans(plansResp.data.data[0]);
      if (viewsResp.data.data[0]) setViews(viewsResp.data.data[0]);
      if (facilitiesResp.data.data[0])
        setFacilities(facilitiesResp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    toast.loading("Adding Data...");
    e.preventDefault();
    const image1 = await uploadToCloudinary(plans?.file);
    setPlans({ ...plans, image: image1 });
    const image2 = [];
    for (const file of views.files) {
      const imageURL = await uploadToCloudinary(file);
      image2.push(imageURL);
    }
    const image3 = await uploadToCloudinary(facilitiesdata.file);
    setFacilities({ ...facilitiesdata, image: image3 });

    try {
      const resp = await axios.post(`${API_LINK}/api/v1/apartment/addPlan`, {
        ...plans,
        image: image1 ? image1 : plans?.image,
        projectId: id,
      });
      toast.success("Changes Are Saved!");
    } catch (error) {
      console.log(error);
    }
    try {
      const resp = await axios.post(`${API_LINK}/api/v1/apartment/addImage`, {
        ...views,
        images: image2 ? image2 : plans?.images,
        projectId: id,
      });
      toast.success("Changes Are Saved!");
    } catch (error) {
      console.log(error);
    }
    try {
      const resp = await axios.post(
        `${API_LINK}/api/v1/apartment/addFacilities`,
        {
          ...facilitiesdata,
          image: image3 ? image3 : facilitiesdata.image,
          projectId: id,
        }
      );
      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  return (
    <form className="w-[90%] md:w-[50%] mx-auto my-10" onSubmit={handleSubmit}>
      <Title title={"Plans Description"} />
      <UploadFile setFile={handlePlansFileChange} image={plans?.image} />
      <div className="flex justify-start items-center flex-col mt-6">
        <input
          type="text"
          name="title"
          id="title"
          value={plans?.description}
          onChange={(e) => setPlans({ ...plans, description: e.target.value })}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <Title title={"Views of Appartment"} />
      <MultipleUploadFile
        setFiles={handleViewsFileChange}
        files={views?.images}
      />
      <p className="w-full text-white/70 mb-6 my-3 text-center">
        You can add 5 images
      </p>
      <Title title={"Facilities"} />
      <div className="flex justify-start items-center flex-col my-8">
        <div className="grid grid-cols-3 place-items-start gap-2 w-full">
          {facilitiesList &&
            facilitiesList.map((item, index) => {
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
                    checked={facilitiesdata?.facilities?.includes(item)}
                    onChange={changeFacility}
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
      <UploadFile
        setFile={handleFacilitiesFileChange}
        image={facilitiesdata?.image}
      />
      <button
        type="submit"
        className="mt-6 bg-[#4d4d4d] text-[#212020] font-semibold py-2 px-4 rounded w-[50%] md:w-[30%] mx-auto block"
      >
        Save Changes
      </button>
    </form>
  );
};

export default AprtmentViews;
