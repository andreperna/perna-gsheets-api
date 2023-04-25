import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";
import {gSheetsServices} from "../services/gSheetsServices.js"

export const router = Router();

// router.post("/:appName/:tableName", async (req, res)=>{
//   const folderName = req.params.appName
//   const sheetName = req.params.tableName
//   const objToAppend = req.body
//   const result = await gSheetsServices.create(folderName, sheetName, objToAppend)
//   res.send(result)
// }
//   // #swagger.tags = ['tables']
// );

router.post("/:appName/:tableName", gSheetsController.create
    // #swagger.tags = ['tables']
  );