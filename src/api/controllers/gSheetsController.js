import { gSheetsServices } from "../services/services.js"

async function create(req, res) {
    const folderName = req.params.appName
    const sheetName = req.params.tableName
    const objToAppend = req.body
    const result = await gSheetsServices.create(folderName, sheetName, objToAppend)
    res.send(result)
}

async function findAll(req, res) {
    const folderName = req.params.appName
    const sheetName = req.params.tableName
    res.json(await gSheetsServices.findAll(folderName, sheetName))
}

async function findOne(req, res) {
    const folderName = req.params.appName
    const sheetName = req.params.tableName
    const id = req.params.id
    res.json(await gSheetsServices.findOne(folderName, sheetName, id))
}

async function update(req, res) {
    const folderName = req.params.appName
    const sheetName = req.params.tableName
    const id = req.params.id
    const objToUpdate = req.boby
    const result = await gSheetsServices.update(folderName, sheetName, id, objToUpdate)
    res.send(result)
}

async function remove(req, res) {
    const folderName = req.params.appName
    const sheetName = req.params.tableName
    const id = req.params.id
    res.json(await gSheetsServices.remove(folderName, sheetName, id))
}

export const gSheetsController = {
    create,
    findAll,
    findOne,
    update,
    remove
}