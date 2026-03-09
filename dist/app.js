"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* import express = require('express');

const app = express();

app.use(express.json()); // Middleware para parsear JSON

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('Pinged here!');
    res.send('Pong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
 */
const express = require("express");
const cors = require("cors");
/* import clienteRoutes from "./routes/cliente.routes"; */
const persona_routes_1 = require("./routes/persona.routes");
const app = express();
app.use(cors());
app.use(express.json());
/* app.use("/api/clientes", clienteRoutes); */
app.use("/api/personas", persona_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map