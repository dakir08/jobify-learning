import express from "express";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import { notFoundMiddleware } from "./middleware/notFound.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  throw new Error("Con cac");
  res.send("Welcome!");
});

// not found will below all the REST
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT ?? 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}... `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
