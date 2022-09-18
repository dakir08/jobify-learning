import express from "express";
import dotenv from "dotenv";

// db and authenticate
import { connectDB } from "./db/connect";

// middleware
import { errorHandlerMiddleware } from "./middleware/errorHandler";
import { notFoundMiddleware } from "./middleware/notFound";

// routers
import { authRouter } from "./routes/authRoutes";
import { jobsRouter } from "./routes/jobsRoutes";
import { getApiPath } from "./utils/pathUtils";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use(getApiPath("/auth"), authRouter);
app.use(getApiPath("/jobs"), jobsRouter);

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
