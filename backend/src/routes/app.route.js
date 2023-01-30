module.exports = (app) => {
    const controller = require("../controllers/app.controller");

    const router = require("express").Router();

    router.post("/api/v1/selector", controller.insertSelectorData);
    router.get("/api/v1/selector", controller.getSelectorData);
    router.post('/api/v1/user-data', controller.insertUserData);
    router.get('/api/v1/user-data', controller.getUserData);
    
    app.use(router);
};
