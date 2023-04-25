import { gDriveFunctions, gSheetFunctions } from "@andreperna/npm-gdrive-gsheets"

async function create(folderName, sheetName, objToAppend) {
    const spreadsheetId = await gDriveFunctions.getSheetId(folderName, sheetName)
    return await gSheetFunctions.appendValues(spreadsheetId, objToAppend)
}

async function findAll(folderName, sheetName) {
    const spreadsheetId = await gDriveFunctions.getSheetId(folderName, sheetName)
    return await gSheetFunctions.getValuesNotNull(spreadsheetId)
}

async function findOne(folderName, sheetName, id) {
    const spreadsheetId = await gDriveFunctions.getSheetId(folderName, sheetName)
    return await gSheetFunctions.getValueByIdNotNull(spreadsheetId, id)
}

async function update(folderName, sheetName, id, objToUpdate) {
    const spreadsheetId = await gDriveFunctions.getSheetId(folderName, sheetName)
    return await gSheetFunctions.updateValues(spreadsheetId, id, objToUpdate)
}

async function remove(folderName, sheetName, id) {
    const spreadsheetId = await gDriveFunctions.getSheetId(folderName, sheetName)
    return await gSheetFunctions.clearValues(spreadsheetId, id)
}

export const gSheetsServices = {
    create,
    findAll,
    findOne,
    update,
    remove
}