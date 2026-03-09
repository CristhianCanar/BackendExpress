import { Request, Response } from "express";
import { obtenerPersonaBantotal } from "../services/bantotal-persona.service";
import { PersonaDTO } from "../models/persona.dto";

interface Params {
  idCliente: string; // viene por URL
}

export const getPersona = async (
  req: Request<Params>,
  res: Response
) => {
  try {
    const idCliente = Number(req.params.idCliente);

    const bantotalResp = await obtenerPersonaBantotal(idCliente);

    const p = bantotalResp.sdtPersona;

    // Mapper → Bantotal → Frontend Angular
    const persona: PersonaDTO = {
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
  } catch (error: any) {
    res.status(500).json({
      message: "Error consultando persona en Bantotal",
      detail: error.message
    });
  }
};