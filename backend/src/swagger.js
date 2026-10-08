const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Sabor Digital",
    description: "Documentação da API para gestão de produtos e pedidos.",
    version: "1.0.0",
  },
  host: "localhost:4000",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Produtos",
      description: "Rotas para cadastro, listagem, atualização e remoção de produtos.",
    },
    {
      name: "Sistema",
      description: "Rotas gerais da API.",
    },
  ],
};

const outputFile = "./src/swagger-output.json";
const endpointsFiles = ["./src/app.js", "./src/routes/*.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
