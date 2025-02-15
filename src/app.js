import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOrigin = process.env.CORS_ORIGIN || "*";

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // Limit JSON size to 16KB
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Limit URL-encoded size to 16KB
app.use(express.static("public/assets")); // Any `static files saves` in the `public/assets` directory
app.use(cookieParser()); // Parse cookies from the request

app.get("/", (req, res) => {
  res.send("TaskBuddy Backend!");
});

// Routes imports
import userRouter from "./routes/user.routes.js";

// Routes Middleware Declarations
app.use("/users", userRouter);

export { app };
