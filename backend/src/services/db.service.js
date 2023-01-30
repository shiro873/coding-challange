const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const db = new JsonDB(new Config("CacheDB", true, false, "/"));

exports.pushData = (name, data) => {
    const path = `/user/${name}`;
    db.push(path, {
        email,
        data,
      });
}

exports.getData = (name) => {
    const path = `/user/${name}`;
    return db.getData(path);
}

exports.deleteData = (name) => {
    const path = `/user/${name}`;
    db.delete(path);
}