import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API OK!");
});

app.use("/api/products", productRoutes); // adding the products routes for the paths (express usage)
app.use("/api/users", userRoutes); // adding the user routes for the paths (express usage)
app.use("/api/orders", orderRoutes); // adding the order routes for the paths (express usage)

app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`5000 is listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
