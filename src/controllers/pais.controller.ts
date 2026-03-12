import { Request, Response } from "express";
import { obtenerPaisesBantotal } from "../services/bantotal-pais.service";
import { mapPaisesToDTO } from "../mappers/pais.mapper";

export const getPaises = async (
  _req: Request,
  res: Response
) => {
  try {

    const bantotalResp = await obtenerPaisesBantotal();

    const paisesDTO = mapPaisesToDTO(bantotalResp);

    res.json(paisesDTO)

  } catch (error: any) {
    res.status(500).json({
      message: "Error consultando paises en Bantotal",
      detail: error.message
    });
  }
};

interface Params {
  idPais: string; // viene por URL
}

export const getEstadosbyPaisId = async (
  req: Request<Params>,
  res: Response
) => {
  try {

    const bantotalResp = await obtenerPaisesBantotal();

    const paisesDTO = mapPaisesToDTO(bantotalResp);

    res.json(paisesDTO)

  } catch (error: any) {
    res.status(500).json({
      message: "Error consultando paises en Bantotal",
      detail: error.message
    });
  }
};