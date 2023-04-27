import { Router } from "express";
import { gDriveController, gSheetsController } from "../controllers/controllers.js";

export const router = Router();


router.get("/apps", gDriveController.findAll
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of apps'
);

router.get("/apps/:appName", gDriveController.findOne
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of tables for this app'
);

router.get("/apps/:appName/:tableName", gSheetsController.findAll
  // #swagger.tags = ['tables']
  // #swagger.summary = 'return data content of table'
);

router.get("/apps/:appName/:tableName/:id", gSheetsController.findOne
  // #swagger.tags = ['tables']
  // #swagger.summary = 'return one item by id'
);
