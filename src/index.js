import { server } from "./server/server.js";
import { swaggerGenDoc } from "./swagger/swaggerGenDoc.js";


await swaggerGenDoc.generateSwaggerDoc()
server.start()