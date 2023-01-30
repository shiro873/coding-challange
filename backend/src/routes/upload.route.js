const helper = require('../controllers/upload.controller');
const uploader = require('../middlewares/file-upload');

module.exports = (app) => {
    app.use(uploader.upload.single('image'));
    app.route('/api/v1/upload')
        .post(helper.handleUploadedFiles);
};
