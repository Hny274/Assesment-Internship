import mongoose, { Schema } from "mongoose";

const facingSchema = new Schema({
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

export const Facing = mongoose.model("Facing", facingSchema);
