import { Floor } from "../model/floor.model.js";

export const addFloor = async (req, res) => {
  try {
    const { description, image, projectId } = req.body;
    let existing = await Floor.findOne({ projectId });
    if (!existing) {
      existing = new Floor({ description, image, projectId });
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


export const getFloors = async (req, res) => {
  try {
    const floors = await Floor.find();
    res.json({ status: "success", data: floors });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getFloorById = async (req, res) => {
  try {
    const floor = await Floor.findById(req.params.id);
    if (!floor) {
      return res.status(404).json({
        status: "error",
        message: "Floor not found",
      });
    }
    res.json({
      status: "success",
      data: floor,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
