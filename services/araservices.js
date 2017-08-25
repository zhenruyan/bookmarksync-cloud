const ara = require('arangojs');
const db = new ara.Database('http://free:free@127.0.0.1:8529');

db.useDatabase('free');

module.exports = db;
