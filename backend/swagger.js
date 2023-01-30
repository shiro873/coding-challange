const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Hyppy API",
        description: "Documentation for Hyppy RFID reader system api"
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    // tags: [
    //     {
    //         "name": "User",
    //         "description": "Endpoints"
    //     }
    // ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
    definitions: {
        signinUser: {
            email: "admin@hyppy.com",
            password: "1234"
        },
        user: {
            name: 'test user',
            email: 'test@mail.com',
            password: '1234',
            roleId: 'ashd-a7s6d8-a98s7d9a-asjdh',
            active: true
        },
        role: {
            name: 'Master Admin'
        },
        stock: {
            productTypeId: 'ajhsgd-asjhdgaj-8as6d8a7-a7s6d',
            quantity: 5,
            metaData: {}
        },
        productTYpe: {
            name: 'pearl neckless',
            image: 'url',
            sku: 'asjh|4564',
            certificate: 'url',
            information: '',
            technicalData: '',
            colors: ['black', 'blue', 'gold'], //json object
            alertCount: 4,
            alertIfLow: true,
            active: true,
            metaData: {}
        },
        product: {
            productTypeId: 'asjhgd-asdh-12324',
            rfid: 'rfidTAG',
            tagged: true,
            certificate: 'url',
            reference: '',
            color: '',
            stockInDate: 'date',
            lastStockTakeDate: '',
            updatedByUserID: '',
            invoice: 'url'
        },
        permission: {
            userId: '',
            inventory: true,
            stockTake: true,
            stockAdjustment: true,
            auditLog: true,
            product: true,
            customer: true,
            user: true,
            metadata: {}
        },
        customerProducts: {
            customerId: '',
            productId: '',
            metaData: {}
        },
        customer: {
            name: '',
            namePrefix: '',
            email: '',
            image: '',
            passport: '',
            mobile: '',
            country: '',
            city: '',
            address: '',
            nationality: '',
            occupation: '',
            birthday: '',
            anniversary: '',
            joinedAt: '',
            metaData: '',
            rfid: ''
        },
        changeOwnership: {
            toCustomerId: '',
            fromCustomerId: '',
            productId: '',
            userId: '',
            metaData: {}
        },
        auditLog: {
            logDate: '',
            logType: '',
            logNo: '',
            productId: '',
            productTypeId: '',
            customerId: '',
            userId: '',
            metaData: '',
            remarks: ''
        }
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./src/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')           // Your project's root file
});