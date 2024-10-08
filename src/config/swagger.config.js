const swaggerJSDoc = require("swagger-jsdoc")

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Swagger Documentation for E-Commerce",
            description: "App dedicated to rx store.",
        }
    },
    apis: ["./src/docs/**/*.yaml"]
}

const specs = swaggerJSDoc(swaggerOptions)

module.exports = specs