import { Router } from "express";

export const router = Router();

router.post("/:appName/:tableName", (req, res) => {
  // #swagger.tags = ['tables']
  res.json({ post: { appName: req.params.appName, tableName: req.params.tableName } })
});
