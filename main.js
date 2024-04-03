const http = require("http");
const server = http.createServer();
const {createStore} = require("./src/stores/createInMemoryStore");
const store = createStore();
const {createApi} = require("./src/createApi");
const api = createApi({store});
server.on("request", api);

server.listen(3000);
