/* import express = require('express');
import cors = require('cors');

import personaRoutes from "./routes/persona.routes";

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

const PORT = 3000;

 app.use("/api/personas", personaRoutes);

app.get('/ping', (_req, res) => {
    console.log('Pinged here!');
    res.send('Pong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); */

import express = require('express');
import cors = require('cors');
/* import clienteRoutes from "./routes/cliente.routes"; */
import paisRoutes from "./routes/pais.routes";
import personaRoutes from "./routes/persona.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

/* app.use("/api/clientes", clienteRoutes); */
app.use("/api/paises", paisRoutes);
app.use("/api/personas", personaRoutes);
app.use("/api/auth", authRoutes);

export default app;