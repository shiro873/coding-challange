const { authJwt } = require("../middlewares");

module.exports = (app) => {
    const controller = require("../controllers/inventory.controller");

    const router = require("express").Router();

    router.post("/api/v1/inventory/admin/product-type", [authJwt.verifyToken], controller.createProductType);
    router.post('/api/v1/inventory/admin/product', [authJwt.verifyToken], controller.createProduct)
    router.post("/api/v1/inventory/app/product", [authJwt.verifyToken], controller.createProduct);

    router.put('/api/v1/inventory/admin/product-type', [authJwt.verifyToken], controller.updateProductType);
    router.put('/api/v1/inventory/admin/product', [authJwt.verifyToken], controller.updateProduct);

    router.get('/api/v1/inventory/admin/product-type', [authJwt.verifyToken], controller.getAllProductTypes);
    router.get('/api/v1/inventory/admin/product', [authJwt.verifyToken], controller.getAllProducts);
    router.get('/api/v1/inventory/app/customer/products', [authJwt.verifyToken], controller.getCustomerProductsById);
    router.get('/api/v1/inventory/app/products', [authJwt.verifyToken], controller.getAllAppProducts);
    router.get('/api/v1/inventory/app/product/tagged', [authJwt.verifyToken], controller.getAllTaggedAppProducts)

    router.post('/api/v1/inventory/app/stock-take/multiple', [authJwt.verifyToken], controller.stockTakeMultiple);
    router.post('/api/v1/inventory/app/stock-take/single', [authJwt.verifyToken], controller.stockTakeSingle);
    router.get('/api/v1/inventory/admin/stock-take', [authJwt.verifyToken], controller.getAllStockTake);
    router.post('/api/v1/inventory/admin/stock-adjustment', [authJwt.verifyToken], controller.stockAdjustment);
    router.get('/api/v1/inventory/admin/stock-adjustment', [authJwt.verifyToken], controller.getAllStockAdjustment);

    router.post('/api/v1/inventory/app/tag-product', [authJwt.verifyToken], controller.tagProduct);
    router.post('/api/v1/inventory/app/add-purchase', [authJwt.verifyToken], controller.addPurchase);

    router.post('/api/v1/inventory/app/change/ownership', [authJwt.verifyToken], controller.changeOwnership);

    router.get('/api/v1/admin/logs', [authJwt.verifyToken], controller.getAllAuditLogs);
    router.get('/api/v1/inventory/admin/product-type/logs', [authJwt.verifyToken], controller.getProductLogsByType);

    app.use(router);
};
