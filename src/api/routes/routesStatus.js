import { Router } from "express";

export const router = Router();


router.get("/status",(req, res) => {
  // #swagger.tags = ['status']
  // #swagger.summary = 'return current status of api'
  res.json({ status: "ok" })
});