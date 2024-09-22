import express from "express";
import { fileURLToPath } from "url";
import path from "path";
const app = express();

import { globalErrorHandler } from "./utils/globalErrorHandler.js";
import { applyMiddleware } from "./middlewares/index.js";

import authRoutes from "./routes/authentication/index.js";
import userRoutes from "./routes/users/index.js";
import healthRoutes from "./routes/health/index.js";
import uploadRoutes from "./routes/upload/index.js";

// Apply middleware
applyMiddleware(app);

// Set up your routes
app.use(authRoutes);
app.use(userRoutes);
app.use(healthRoutes);
app.use(uploadRoutes);

// HANDLE UPLOADED FILE SERVED
// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files from the uploads directory
app.use(
  "/uploads",
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "uploads")
  )
);

// Handle all other routes (404 error handling)
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use(globalErrorHandler);

export default app;
