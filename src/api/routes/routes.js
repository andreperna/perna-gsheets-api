import { router as routesStatus } from "./routesStatus.js";
import { router as routesGDrive } from "./routesGDrive.js";
import { router as routesGSheets } from "./routesGSheets.js";

import { Router } from "express";

export const router = Router();

router.use(routesStatus)
router.use(routesGDrive);
router.use(routesGSheets);
