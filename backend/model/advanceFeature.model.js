import mongoose from "mongoose";

const advanceFeatureSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  advanceFeature: [String],
});

export const AdvanceFeature = mongoose.model(
  "AdvanceFeature",
  advanceFeatureSchema
);
