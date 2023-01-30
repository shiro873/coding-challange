const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "EXAMPLE API",
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
        user: {
            name: 'test user',
            email: 'test@mail.com',
            password: '1234',
            roleId: 'ashd-a7s6d8-a98s7d9a-asjdh',
            active: true
        },
        
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./src/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')           // Your project's root file
});