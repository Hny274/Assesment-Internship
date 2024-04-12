import mongoose from "mongoose";

const viewSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  images: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 5;
      },
      message: (props) => `${props.path} exceeds the limit of 5 images`,
    },
  },
});

export const View = mongoose.model("View", viewSchema);
