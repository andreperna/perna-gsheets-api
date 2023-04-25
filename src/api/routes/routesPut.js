import { Router } from "express";
import { gSheetsController } from "../controllers/gSheetsController.js";
import {gSheetsServices} from "../services/gSheetsServices.js"

export const router = Router();

router.put("/:appName/:tableName/:id", async(req, res)=>{
  const folderName = req.params.appName
  const sheetName = req.params.tableName
  const id = req.params.id
  const objToUpdate = req.body
  const result = await gSheetsServices.update(folderName, sheetName, id, objToUpdate)
  res.send(result)
}
  // #swagger.tags = ['tables']
);
