import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";

export const router = Router();

router.delete("/:appName/:tableName/:id", gSheetsController.remove
  // #swagger.tags = ['tables']
);
