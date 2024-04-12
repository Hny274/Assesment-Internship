import express from "express";

import {
  addFacing,
  getFacingById,
  getFacings,
} from "../controller/facing.controller.js";

import {
  addFloor,
  getFloorById,
  getFloors,
} from "../controller/floor.controller.js";

import { addBHK, getBHKById, getBHKs } from "../controller/bhk.controller.js";

import {
  addAdvanceFeature,
  getAdvanceFeatureById,
  getAdvanceFeatures,
} from "../controller/advanceFeature.controller.js";

const router = express.Router();

router.get("/getFacings", getFacings);
router.post("/addFacing", addFacing);
router.get("/getFacingById/:id", getFacingById);

router.get("/getFloors", getFloors);
router.post("/addFloor", addFloor);
router.get("/getFloorById/:id", getFloorById);

router.get("/getBHKs", getBHKs);
router.post("/addBHK", addBHK);
router.get("/getBHKById/:id", getBHKById);

router.get("/getAdvanceFeatures", getAdvanceFeatures);
router.post("/addAdvanceFeature", addAdvanceFeature);
router.get("/getAdvanceFeatureById/:id", getAdvanceFeatureById);

export default router;
