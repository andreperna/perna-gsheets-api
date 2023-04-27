import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";

export const router = Router();

router.delete("/apps/:appName/:tableName/:id", gSheetsController.remove
  // #swagger.tags = ['tables']
  // #swagger.summary = 'delete one item by id'
);
