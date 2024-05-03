require("dotenv").config();
const http = require("http");
const server = http.createServer();
const jwt = require("jsonwebtoken");
const {createStore} = require("./src/stores/createStore");
const store = createStore();
const {createApi} = require("./src/createApi");
const api = createApi({store, jwt});

server.on("request", api);

server.listen(3000);
