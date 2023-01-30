const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const db = new JsonDB(new Config("HyppyCacheDB", true, false, "/"));

exports.pushData = (email, data) => {
    const path = `/user/${email}`;
    db.push(path, {
        email,
        data,
      });
}

exports.getData = (email) => {
    const path = `/user/${email}`;
    return db.getData(path);
}

exports.deleteData = (email) => {
    const path = `/user/${email}`;
    db.delete(path);
}