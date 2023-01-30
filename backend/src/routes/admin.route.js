const { authJwt } = require("../middlewares");

module.exports = (app) => {
    const adminController = require("../controllers/admin.controller");

    const router = require("express").Router();

    // router.post("/api/v1/admin/signin", adminController.signin);
    // router.post("/api/v1/admin/create-admin", adminController.create);
    app.use(router);
};
