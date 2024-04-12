import express from "express";
import {
  addProject,
  getProjectById,
  getProjects,
} from "../controller/project.controller.js";

const router = express.Router();

router.get("/getProjects", getProjects);
router.post("/addProject", addProject);
router.get("/getProjectById/:id", getProjectById);

export default router;
