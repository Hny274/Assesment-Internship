import { Plan } from "../model/apart.plans.model.js";

export const addPlan = async (req, res) => {
  try {
    const { description, image, projectId } = req.body;
    let existing = await Plan.findOne({ projectId });
    if (!existing) {
      existing = new Plan({ description, image, projectId });
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


export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json({ status: "success", data: plans });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({
        status: "error",
        message: "Plan not found",
      });
    }
    res.json({
      status: "success",
      data: plan,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
