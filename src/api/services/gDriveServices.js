import { gDriveFunctions } from "@andreperna/npm-gdrive-gsheets"

async function findAll() {
    return { data: await gDriveFunctions.getFolders() }
}

async function findOne(folderName) {
    return { data: await gDriveFunctions.getSheets(folderName)}
}

export const gDriveServices = {
    findAll,
    findOne
}