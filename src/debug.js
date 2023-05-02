
let result = ""

import { gDriveServices, gSheetsServices } from "./api/services/services.js"

// result = await gDriveServices.findOne("app2")

// result = await gSheetsServices.findAll("app2", "tbl_users")

// result = await gSheetsServices.findOne("app2", "tbl_users", 8)

// result = await gSheetsServices.create("app2", "tbl_users",{nome: "sssss", idade: 55})
result = await gSheetsServices.update("app2", "tbl_users", 21, { name: "sss", age: 55 })


import { gSheetsController } from "./api/controllers/gSheetsController.js"
const req = {
    params : {
        appName: "app2",
        tableName: "tbl_users",
        id: 20
    },
    body : {
        "name": "Jhon Doe",
        "age": 29
    }
}

// result = await gSheetsController.update(req)

// result = req.body




console.clear()
console.log(result)