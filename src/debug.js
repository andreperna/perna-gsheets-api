
let result = ""

import { gDriveServices, gSheetsServices } from "./api/services/services.js"

// result = await gDriveServices.findOne("app2")

// result = await gSheetsServices.findAll("app2", "tbl_users")

// result = await gSheetsServices.findOne("app2", "tbl_users", 8)

result = await gSheetsServices.create("app2", "tbl_users",{nome: "sssss", idade: 55})



console.clear()
console.log(result)