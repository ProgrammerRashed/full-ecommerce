
  import { Router } from "express";
import { healthCheck } from "../../api/health/controllers/healthCheck.js";

const router = Router();



// Health route
router.get("/health", healthCheck);

export default router;
