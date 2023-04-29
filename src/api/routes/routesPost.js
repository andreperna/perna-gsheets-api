import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";

import { gSheetsServices } from "../services/gSheetsServices.js";

export const router = Router();



router.post("/apps/:appName/:tableName", gSheetsController.create
  // #swagger.tags = ['tables']
  // #swagger.summary = 'create one item'
  // #swagger.parameters['objToCreate'] = {in: 'body', required: true , schema: {$name: 'Jhon Doe', $age: 29, about: ''}}
);