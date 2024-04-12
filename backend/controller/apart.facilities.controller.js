import { Facilities } from "../model/apart.facilities.model.js";

export const addFacilities = async (req, res) => {
  try {
    const { projectId, image, facilities } = req.body;
    let existing = await Facilities.findOne({ projectId });
    if (!existing) {
      existing = new Facilities({ projectId, image, facilities });
    } else {
      existing.image = image
      existing.facilities = facilities
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

export const getFacilities = async (req, res) => {
  try {
    const facilities = await Facilities.find();
    res.status(200).json({
      status: "success",
      data: facilities,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getFacilitiesById = async (req, res) => {
  try {
    const facilities = await Facilities.findById(req.params.id);
    if (!facilities) {
      return res.status(404).json({
        status: "error",
        message: "Facilities not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: facilities,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
