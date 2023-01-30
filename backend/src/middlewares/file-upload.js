const multer = require('multer');
const MulterAzureStorage = require('multer-azure-blob-storage').MulterAzureStorage;
const config = require('../config/config');

const resolveBlobName = (req, file)=>{
    return new Promise((resolve, reject)=>{
        const blobName = Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
        resolve(blobName);
    })
};

const resolveMetadata = (req, file)=>{
    return new Promise((resolve, reject)=>{
        const metadata = (req, file)=>({
            filename: file.filename,
            size: file.size,
            mimetype: file.mimetype
        });

        console.log("blob metadata");
        resolve(metadata);
    })
};

const azureStorage = new MulterAzureStorage({
    connectionString: config.STORAGE_CONNECTION_STRING,
    accessKey: config.STORAGE_ACCESS_KEY,
    accountName: config.STORAGE_ACCOUNT_NAME,
    containerName: 'images',
    blobName: resolveBlobName,
    metadata: resolveMetadata,
    containerAccessLevel: 'blob',
    urlExpirationTime: 60
});

const upload = multer({
    storage: azureStorage
});

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, rfile, cb)=>{
//         cb(null, "images");
//     },
//     filename: (req, file, cb)=>{
//         cb(null, Date.now() +'.'+ file.originalname.split('.')[file.originalname.split('.').length - 1]);
//     }
// });


// const upload = multer({storage: fileStorageEngine});

exports.upload = upload;