import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import toast from "react-hot-toast";
import { FaFileArrowUp } from "react-icons/fa6";

const fileTypes = ["JPG", "PNG", "GIF"];

const MultipleUploadFile = ({ setFiles, files }) => {
  const [imageURLs, setImageURLs] = useState(files || []);
  const handleChange = (files) => {
    if (Object.keys(files).length === 5) {
      setFiles(files);
      const urls = Object.values(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImageURLs(urls);
    } else toast.error("Select 5 Images Only");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <FileUploader
        handleChange={handleChange}
        name="files"
        types={fileTypes}
        multiple
      >
        <div className="border-2 border-white border-dashed h-[150px] w-[240px] flex-col rounded mx-auto flex justify-center items-center mr-4">
          <FaFileArrowUp className="text-white text-3xl" />
          <p className="text-white mt-2 text-lg">Drag and Drop</p>
          <p className="text-white mt-1 text-xs">
            Browse to upload (Max 5 files)
          </p>
        </div>
      </FileUploader>
      <div className="flex flex-wrap mt-4">
        {imageURLs.map((file, index) => (
          <div key={index} className="mr-4 mb-4">
            <img
              src={file}
              alt={`Preview ${index + 1}`}
              className="max-w-[150px] max-h-[150px] object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleUploadFile;
