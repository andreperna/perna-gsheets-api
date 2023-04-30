import { Router } from "express";
import { gDriveController } from "../controllers/controllers.js";

export const router = Router();


router.get("/apps", gDriveController.findAll
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of apps'
);

router.get("/apps/:appName", gDriveController.findOne
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of tables for this app'
);