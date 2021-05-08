import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API OK!");
});

app.use("/api/products", productRoutes); // adding the routes for the paths (express usage)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`5000 is listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
