import React, { useEffect, useState } from "react";
import UploadFile from "../../components/uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
const Broucher = ({ id }) => {
  const [formData, setFormData] = useState({
    file: null,
    image: "",
  });

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
    try {
      const resp = await axios.post(`${API_LINK}/api/v1/broucher/addBroucher`, {
        projectId: id,
        image,
      });
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
        `${API_LINK}/api/v1/broucher/getBrouchers`,
        formData
      );
      setFormData(resp.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-[50%] mt-10 mx-auto" onSubmit={handleSubmit}>
      <p className="w-full text-center text-white/70 mb-2 text-lg">Broucher</p>
      <UploadFile setFile={handleFileChange} image={formData?.image} />
      <button
        type="submit"
        className="mt-6 bg-[#4d4d4d] text-[#212020] font-semibold py-2 px-4 rounded w-[30%] mx-auto block mb-10"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Broucher;
