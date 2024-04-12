import mongoose from "mongoose";

const facilitiesSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  facilities: [String],
});

export const Facilities = mongoose.model("Facilities", facilitiesSchema);
