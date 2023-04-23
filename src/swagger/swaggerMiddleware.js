import fs from "node:fs"
import { serve, setup } from "swagger-ui-express";


const swaggerDoc = JSON.parse(fs.readFileSync("src/swagger/swagger-output.json"))

export const swaggerMiddleware = [
  serve,
  setup(swaggerDoc)
]

