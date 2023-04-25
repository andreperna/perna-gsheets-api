import { gDriveFunctions } from "@andreperna/npm-gdrive-gsheets"

async function findAll() {
    return await gDriveFunctions.getFolders()
}

async function findOne(folderName) {
    return await gDriveFunctions.getSheets(folderName)
}

export const gDriveServices = {
    findAll,
    findOne
}