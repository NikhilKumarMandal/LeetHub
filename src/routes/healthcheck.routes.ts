import express from "express";
import { HealthCheck } from "../controllers/health.controllers";

const router = express.Router();

const healthCheck = new HealthCheck();

router.post("/health-check", healthCheck.heathCheck);

export default router;
