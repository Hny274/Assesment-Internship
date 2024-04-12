import { BHK } from "../model/bhk.model.js";

export const addBHK = async (req, res) => {
  try {
    const { projectId, image, bhk } = req.body;
    let existing = await BHK.findOne({ projectId });
    if (!existing) {
      existing = new BHK({ projectId, image, bhk });
    } else {
      existing.image = image
      existing.bhk = bhk
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

export const getBHKs = async (req, res) => {
  try {
    const bhk = await BHK.find();
    res.status(200).json({
      status: "success",
      data: bhk,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const getBHKById = async (req, res) => {
  try {
    const bhk = await BHK.findById(req.params.id);
    if (!bhk) {
      return res
        .status(404)
        .json({ status: "error", message: "BHK not found" });
    }
    res.status(200).json({
      status: "success",
      data: bhk,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
