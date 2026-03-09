"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerClienteBantotal = void 0;
const axios_1 = require("axios");
const env_1 = require("../config/env");
const bantotalApi = axios_1.default.create({
    baseURL: env_1.env.BANTOTAL_URL,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    },
    timeout: 10000
});
const obtenerClienteBantotal = async (request) => {
    const url = `/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPaises=`;
    const response = await bantotalApi.post(url, request);
    return response.data;
};
exports.obtenerClienteBantotal = obtenerClienteBantotal;
//# sourceMappingURL=bantotal.service.js.map