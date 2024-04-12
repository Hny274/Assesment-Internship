import { View } from "../model/apart.view.model.js";

export const addImage = async (req, res) => {
  const { projectId, images } = req.body;
  try {
    if (projectId) {
      const exisitingView = await View.findOne({ projectId });
      if (!exisitingView) {
        exisitingView = new View({ images, projectId });
      } else {
        exisitingView.images = images
      }
      const updatedView = await exisitingView.save();
      return res.status(200).json({ status: "success", data: updatedView });
    } else {
      const newView = new View({ images });
      const savedView = await newView.save();
      return res.status(201).json({ status: "success", data: savedView });
    }
  } catch (err) {
    return res.status(400).json({ status: "error", message: err.message });
  }
};


export const getImages = async (req, res) => {
  try {
    const images = await View.find();
    res.status(200).json({
      status: "success",
      data: images,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getImageById = async (req, res) => {
  try {
    const image = await View.findById(req.params.id);
    if (!image) {
      return res
        .status(404)
        .json({ status: "error", message: "Image not found" });
    }
    res.status(200).json({
      status: "success",
      data: image,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
