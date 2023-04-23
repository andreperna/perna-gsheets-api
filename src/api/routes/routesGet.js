import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  // #swagger.tags = ['Users']

  res.json({ get: req.url })
});

router.get("/status", (req, res) => {
  // #swagger.tags = ['status']
  // #swagger.summary = 'return current status of api'
  res.json({ status: "ok" })
});

router.get("/apps", (req, res) => {
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of apps'
  res.json({ get: req.url })
  
});

router.get("/:appName", (req, res) => {
  // #swagger.tags = ['apps']
  // #swagger.summary = 'return list of tables for this app'
  res.json({ appName: req.params.appName })
});

router.get("/:appName/:tableName", (req, res) => {
  // #swagger.tags = ['tables']
    // #swagger.summary = 'return data content of table'
  res.json({ appName: req.params.appName, tableName: req.params.tableName })
});

router.get("/:appName/:tableName/:id", (req, res) => {
  // #swagger.tags = ['tables']
    // #swagger.summary = 'return content of id'
  res.json({ appName: req.params.appName, tableName: req.params.tableName, id: req.params.id })
});
