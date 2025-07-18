import http from "http";
import { WebSocketServer } from "ws";
import url from "url";
import cors from "cors";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

// WebSocket server
const websocket = new WebSocketServer({ server });

websocket.on("connection", (connection, req) => {
    const { name } = url.parse(req.url, true).query;
    const uuid = uuidv4();
    console.log(connection);
    console.log(name);
    console.log(uuid);
});

// http server
app.get("/foo", (req, res) => {
    const { name } = url.parse(req.url, true).query;
    console.log(name);
    res.send(name);
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
