import mongoose, { Schema } from "mongoose";

const planSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

export const Plan = mongoose.model("Plan", planSchema);
