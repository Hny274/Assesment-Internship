import mongoose, { Schema } from "mongoose";

const broucherSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

export const Broucher = mongoose.model("Broucher", broucherSchema);
