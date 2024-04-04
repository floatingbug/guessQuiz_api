require("dotenv").config();
const http = require("http");
const server = http.createServer();
const {createStore} = require("./src/stores/createSqlStore");
const store = createStore();
const {createApi} = require("./src/createApi");
const api = createApi({store});
server.on("request", api);

server.listen(3000);
