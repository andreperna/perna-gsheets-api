import { gDriveServices } from "../services/services.js"

async function findAll(req, res) {
    res.json(await gDriveServices.findAll())
}

async function findOne(req, res) {
    const folderName = req.params.appName
    res.json(await gDriveServices.findOne(folderName))
}

export const gDriveController = {
    findAll,
    findOne
}