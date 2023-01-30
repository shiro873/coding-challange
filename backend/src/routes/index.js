module.exports = (app) => {
    require('./2fa.route')(app);
    require('./admin.route')(app);
    require('./auth.routes')(app);
    require('./customer.route')(app);
    require('./inventory.route')(app);
    require('./upload.route')(app);
}