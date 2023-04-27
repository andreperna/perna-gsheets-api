
import { gSheetsServices } from "./api/services/gSheetsServices.js";

const response = await gSheetsServices.create("app2", "tbl_users", {nome:"carlos", idade: "56"})

// const response = await gSheetsController.create

console.log(response)