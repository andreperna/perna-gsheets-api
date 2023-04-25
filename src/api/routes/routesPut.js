import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";

export const router = Router();

router.put("/:appName/:tableName/:id", gSheetsController.update
  // #swagger.tags = ['tables']
);
