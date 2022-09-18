import express from "express";
import dotenv from "dotenv";
import { errorHandlerMiddleware } from "./middleware/errorHandler";
import { notFoundMiddleware } from "./middleware/notFound";
import { connectDB } from "./db/connect";
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
  if (!process.env.MONGO_URL) {
    throw new Error("Please provide MONGO_URL");
  }

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
