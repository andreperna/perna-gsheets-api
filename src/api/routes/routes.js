import { router as routesStatus } from "./routesStatus.js";
import { router as routesGet } from "./routesGet.js";
import { router as routesPost } from "./routesPost.js";
import { router as routesPut } from "./routesPut.js";
import { router as routesDelete } from "./routesDelete.js";

import { Router } from "express";

export const router = Router();

router.use(routesStatus)
router.use(routesGet);
router.use(routesPost);
router.use(routesPut);
router.use(routesDelete);
