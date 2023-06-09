import express from "express";
import cors from "cors"
import { swaggerMiddleware } from "../swagger/swaggerMiddleware.js";
import { router as routesIndex } from "./routes/routes.js";
// import swaggerDoc from "../swagger/swagger-output.json" assert { type: "json" };


export const api = express();

api.use(cors())

api.set ("json spaces", 2)
api.use(express.json())
api.use(express.urlencoded({extended: true}))



api.use(routesIndex);
api.use("/", swaggerMiddleware)
