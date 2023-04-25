import { server } from "./server/server.js";
import { swaggerGenDoc } from "./swagger/swaggerGenDoc.js";


await swaggerGenDoc.generateSwaggerDoc()
server.start()

import {gSheetsServices} from "./api/services/gSheetsServices.js"
import {gSheetFunctions} from "../node_modules/@andreperna/npm-gdrive-gsheets/src/gSheets/gSheetsFunctions.js"

gSheetFunctions.updateValues("1HXQ2VUl1QRoz576hiN6QbqXDeVZptl_SAijTBSit4ro", 3, {name:"ddddd", brand:"jjjjj"})
