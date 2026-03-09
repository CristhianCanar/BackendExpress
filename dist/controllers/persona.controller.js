"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersona = void 0;
const bantotal_persona_service_1 = require("../services/bantotal-persona.service");
const getPersona = async (req, res) => {
    try {
        const idCliente = Number(req.params.idCliente);
        const bantotalResp = await (0, bantotal_persona_service_1.obtenerPersonaBantotal)(idCliente);
        const p = bantotalResp.sdtPersona;
        // Mapper → Bantotal → Frontend Angular
        const persona = {
            idCliente,
            nombreCompleto: `${p.primerNombre.trim()} ${p.segundoNombre.trim()} ${p.primerApellido.trim()} ${p.segundoApellido.trim()}`.replace(/\s+/g, " "),
            documento: p.nroDocumento.trim(),
            correo: p.correoElectronico,
            telefono: p.telefonoCelular.trim(),
            nacionalidad: p.nacionalidad.trim(),
            ingresos: p.ingresos,
            fechaNacimiento: p.fechaNacimiento,
            direccion: `${p.calle.trim()} ${p.numeroPuerta.trim()} ${p.apartamento.trim()}`
        };
        res.json(persona);
    }
    catch (error) {
        res.status(500).json({
            message: "Error consultando persona en Bantotal",
            detail: error.message
        });
    }
};
exports.getPersona = getPersona;
//# sourceMappingURL=persona.controller.js.map