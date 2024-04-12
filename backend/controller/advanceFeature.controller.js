import { AdvanceFeature } from "../model/advanceFeature.model.js";

export const addAdvanceFeature = async (req, res) => {
  try {
    const { projectId, image, advanceFeature } = req.body;
    let existing = await AdvanceFeature.findOne({ projectId });
    if (!existing) {
      existing = new AdvanceFeature({ projectId, image, advanceFeature });
    } else {
      existing.image = image
      existing.advanceFeature = advanceFeature
    }
    const updated = await existing.save();
    res.status(201).json({
      status: 'success',
      data: updated,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};


export const getAdvanceFeatures = async (req, res) => {
  try {
    const feature = await AdvanceFeature.find();
    res.status(200).json({
      status: "success",
      data: feature,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getAdvanceFeatureById = async (req, res) => {
  try {
    const feature = await AdvanceFeature.findById(req.params.id);
    if (!feature) {
      return res
        .status(404)
        .json({ status: "error", message: "feature not found" });
    }
    res.status(200).json({
      status: "success",
      data: feature,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
