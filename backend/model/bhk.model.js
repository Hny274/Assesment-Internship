import mongoose from "mongoose";

const bhkSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bhk: [String],
});

export const BHK = mongoose.model("BHK", bhkSchema);
