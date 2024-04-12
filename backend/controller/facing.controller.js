import { Facing } from "../model/facing.model.js";

export const addFacing = async (req, res) => {
  try {
    const { description, image, projectId } = req.body;
    let existing = await Facing.findOne({ projectId });
    if (!existing) {
      existing = new Facing({ description, image, projectId });
    } else {
      existing.image = image
      existing.description = description
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

export const getFacings = async (req, res) => {
  try {
    const facings = await Facing.find();
    res.json({ status: "success", data: facings });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getFacingById = async (req, res) => {
  try {
    const facing = await Facing.findById(req.params.id);
    if (!facing) {
      return res.status(404).json({
        status: "error",
        message: "Facing not found",
      });
    }
    res.json({
      status: "success",
      data: facing,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
