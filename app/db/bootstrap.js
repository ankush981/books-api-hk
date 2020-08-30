const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(process.env.DB_FILE_NAME);
const db = lowdb(adapter);

const initialState = require("./initialState");
db.defaults(initialState).write();

module.exports = db;
