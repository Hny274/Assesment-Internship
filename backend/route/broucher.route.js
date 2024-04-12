import express from "express";
import {
  addBroucher,
  getBroucherById,
  getBrouchers,
} from "../controller/broucher.controller.js";

const router = express.Router();

router.get("/getBrouchers", getBrouchers);
router.post("/addBroucher", addBroucher);
router.get("/getBroucherById/:id", getBroucherById);

export default router;
