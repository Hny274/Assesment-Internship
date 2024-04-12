import { Project } from "../model/project.model.js";

export const addProject = async (req, res) => {
  try {
    const { _id, title, description, image, location } = req.body;
    if (_id) {
      const updatedProject = await Project.findByIdAndUpdate(_id, { title, description, image, location }, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ status: "error", message: "Project not found" });
      }
      return res.status(200).json({ status: "success", data: updatedProject });
    } else {
      const project = new Project({ title, description, image, location });
      const newProject = await project.save();
      return res.status(201).json({ status: "success", data: newProject });
    }
  } catch (err) {
    return res.status(400).json({ status: "error", message: err.message });
  }
};


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ status: "success", data: projects });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        status: "error",
        message: "Project not found",
      });
    }
    res.json({
      status: "success",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
