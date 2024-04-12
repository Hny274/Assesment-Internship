import express from "express";
import {
  addPlan,
  getPlanById,
  getPlans,
} from "../controller/apart.plans.controller.js";

import {
  addImage,
  getImageById,
  getImages,
} from "../controller/apart.view.controller.js";

import {
  addFacilities,
  getFacilitiesById,
  getFacilities,
} from "../controller/apart.facilities.controller.js";

const router = express.Router();

router.get("/getPlans", getPlans);
router.post("/addPlan", addPlan);
router.get("/getPlanById/:id", getPlanById);

router.get("/getImages", getImages);
router.post("/addImage", addImage);
router.get("/getImageById/:id", getImageById);

router.get("/getFacilities", getFacilities);
router.post("/addFacilities", addFacilities);
router.get("/getFacilitiesById/:id", getFacilitiesById);

export default router;
