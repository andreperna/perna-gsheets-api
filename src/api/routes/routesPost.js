import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";

export const router = Router();

router.post("/:appName/:tableName", gSheetsController.create
  // #swagger.tags = ['tables']
);
