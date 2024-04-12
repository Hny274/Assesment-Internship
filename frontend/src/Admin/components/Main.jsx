import React, { useEffect, useState } from "react";
import UploadFile from "../../components/uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
const Main = ({ setId }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    file: null,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Uploading!!");
    const image = await uploadToCloudinary(formData?.file);
    setFormData({ ...formData, image });
    try {
      const resp = await axios.post(
        `${API_LINK}/api/v1/project/addProject`,
        formData
      );
      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/api/v1/project/getProjects`,
        formData
      );
      setFormData(resp.data.data[0]);
      setId(resp.data.data[0]?._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-[50%] mt-10 mx-auto" onSubmit={handleSubmit}>
      <UploadFile setFile={handleFileChange} image={formData?.image} />
      <div className="flex justify-start items-center flex-col mt-6">
        <label htmlFor="title" className="w-full text-white/70 mb-2">
          Project Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData?.title}
          onChange={handleChange}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <div className="flex justify-start items-center flex-col mt-3">
        <label htmlFor="description" className="w-full text-white/70 mb-2">
          Project Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData?.description}
          onChange={handleChange}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <div className="flex justify-start items-center flex-col mt-3">
        <label htmlFor="location" className="w-full text-white/70 mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData?.location}
          onChange={handleChange}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-6 bg-[#4d4d4d] text-[#212020] font-semibold py-2 px-4 rounded w-[30%] mx-auto block"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Main;
