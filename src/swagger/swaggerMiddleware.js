import fs from "node:fs"
import { serve, setup } from "swagger-ui-express";


const swaggerDoc = JSON.parse(fs.readFileSync("src/swagger/swagger-output.json"))

export const swaggerMiddleware = [
  (req, res, next)=>{
    swaggerDoc.host = req.get('host')
    next()
  },
  serve,
  setup(swaggerDoc)
]

