import { Router } from "express";
import { gDriveController, gSheetsController } from "../controllers/controllers.js";

export const router = Router();


router.get("/status", (req, res) => {
  // #swagger.tags = ['status']
  // #swagger.summary = 'return current status of api'
  res.json({ status: "ok" })
});

router.get("/", gDriveController.findAll
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of apps'
);

router.get("/:appName", gDriveController.findOne
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of tables for this app'
);

router.get("/:appName/:tableName", gSheetsController.findAll
  // #swagger.tags = ['tables']
    // #swagger.summary = 'return data content of table'
 );

router.get("/:appName/:tableName/:id", gSheetsController.findOne
  // #swagger.tags = ['tables']
    // #swagger.summary = 'return content of id'
);
