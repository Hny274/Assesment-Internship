import { Broucher } from "../model/broucher.model.js";

export const addBroucher = async (req, res) => {
  try {
    const { image, projectId } = req.body;
    let existing = await Broucher.findOne({ projectId });
    if (!existing) {
      existing = new Broucher({ projectId, image });
    } else {
      existing.image = image
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


export const getBrouchers = async (req, res) => {
  try {
    const brouchers = await Broucher.find();
    res.json({ status: "success", data: brouchers });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getBroucherById = async (req, res) => {
  try {
    const broucher = await Broucher.findById(req.params.id);
    if (!broucher) {
      return res.status(404).json({
        status: "error",
        message: "Broucher not found",
      });
    }
    res.json({
      status: "success",
      data: broucher,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
