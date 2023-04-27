import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";

import { gSheetsServices } from "../services/gSheetsServices.js";

export const router = Router();



router.post("/apps/:appName/:tableName", gSheetsController.create
  // #swagger.tags = ['tables']
  // #swagger.summary = 'create one item'
);