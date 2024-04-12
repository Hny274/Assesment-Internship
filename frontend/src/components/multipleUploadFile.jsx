import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FaFileArrowUp } from "react-icons/fa6";

const fileTypes = ["JPG", "PNG", "GIF"];

const MultipleUploadFile = ({ setFiles }) => {
  const handleChange = (files) => {
    setFiles(files);
  };

  return (
    <div className="flex justify-center items-center">
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
    </div>
  );
};

export default MultipleUploadFile;
