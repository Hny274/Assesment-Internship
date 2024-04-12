import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connection.js";
import cors from "cors"
import projectRouter from "./route/project.route.js";
import apartmentRouter from "./route/apartment.route.js";
import projectFeatureRouter from "./route/project.features.route.js";
import broucherRouter from "./route/broucher.route.js";
dotenv.config()
const app = express();

app.use(cors("*"))
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/v1/project", projectRouter);
app.use("/api/v1/apartment", apartmentRouter);
app.use("/api/v1/feature", projectFeatureRouter);
app.use("/api/v1/broucher",broucherRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection faildes!!", err);
  });
