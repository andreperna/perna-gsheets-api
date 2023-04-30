import { Router } from "express";
import { gSheetsController } from "../controllers/controllers.js";

export const router = Router();


router.get("/apps/:appName/:tableName", gSheetsController.findAll
  // #swagger.tags = ['tables']
  // #swagger.summary = 'return data content of table'
);

router.get("/apps/:appName/:tableName/:id", gSheetsController.findOne
  // #swagger.tags = ['tables']
  // #swagger.summary = 'return one item by id'
);

router.post("/apps/:appName/:tableName", gSheetsController.create
  // #swagger.tags = ['tables']
  // #swagger.summary = 'create one item'
  // #swagger.parameters['objToCreate'] = {in: 'body', required: true , schema: {$name: 'Jhon Doe', $age: 29}}
);

router.put("/apps/:appName/:tableName/:id", gSheetsController.update
  // #swagger.tags = ['tables']
  // #swagger.summary = 'update one item by id'
  // #swagger.parameters['objToUpdate'] = {in: 'body', required: true , schema: {$name: 'Jhon Doe', $age: 29}}
);

router.delete("/apps/:appName/:tableName/:id", gSheetsController.remove
  // #swagger.tags = ['tables']
  // #swagger.summary = 'delete one item by id'
);