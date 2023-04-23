import { Router } from "express";

export const router = Router();

router.put("/:appName/:tableName/:id", (req, res) => {
  // #swagger.tags = ['tables']
  res.json({ put: { appName: req.params.appName, tableName: req.params.tableName, id: req.params.id } })
});
