"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPersonaBantotal = void 0;
const axios_1 = require("axios");
const bantotalApi = axios_1.default.create({
    baseURL: "http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json"
    }
});
const obtenerPersonaBantotal = async (clienteUId) => {
    const body = {
        Btinreq: {
            Device: "AV",
            Usuario: "INSTALADOR",
            Requerimiento: "",
            Canal: "BTDIGITAL",
            Token: "cb492b28d1CD285A89A23FBE"
        },
        clienteUId
    };
    const response = await bantotalApi.post("/com.dlya.bantotal.odwsbt_BTClientes_v1?Obtener=", body);
    return response.data;
};
exports.obtenerPersonaBantotal = obtenerPersonaBantotal;
//# sourceMappingURL=bantotal-persona.service.js.map