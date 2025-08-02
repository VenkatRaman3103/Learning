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

const connections = {};
const users = {};

websocket.on("connection", (connection, req) => {
    const { name } = url.parse(req.url, true).query;
    const uuid = uuidv4();

    connections[uuid] = connection;
    users[uuid] = name;

    connection.on("message", (message) => {
        const user = users[uuid];
        const msg = message.toString().trim();

        const [reciever, messageToSend] = msg.split(": ");

        const [friendId, friendName] = Object.entries(users).filter(
            ([id, name]) => name == reciever,
        )[0];

        if (friendId) {
            const friendConnection = connections[friendId];

            friendConnection.send(`${user} |-> ${messageToSend}`);
            connection.send(`Message sent to ${users[friendId]}`);
        }
    });
});

app.get("/foo", (req, res) => {
    const { name } = url.parse(req.url, true).query;
    console.log(name);
    res.send(name);
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
