import axios from "axios";
import { env } from "../config/env";
import {
  ObtenerPaisesResponse,
  ObtenerPaisesRequest
} from "../models/obtener-paises";
import { ObtenerEstadosByPaisRequest, ObtenerEstadosResponse } from "../models/obtener-estados-by-pais";


const bantotalApi = axios.create({
  baseURL: env.BANTOTAL_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const obtenerPaisesBantotal = async (): Promise<ObtenerPaisesResponse> => {
  const body: ObtenerPaisesRequest = {
    Btinreq: {
      Device: "AV",
      Usuario: "INSTALADOR",
      Requerimiento: "",
      Canal: "BTDIGITAL",
      Token: env.BANTOTAL_TOKEN
    }
  };

  const response = await bantotalApi.post<ObtenerPaisesResponse>(
    "/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPaises=",
    body
  );

  console.log("Respuesta de Bantotal:", response.data);
  return response.data;
};

export const obtenerEstadosByPaisIdBantotal = async ( pais: number): Promise<ObtenerEstadosResponse> => {
  const body: ObtenerEstadosByPaisRequest = {
    Btinreq: {
      Device: "AV",
      Usuario: "INSTALADOR",
      Requerimiento: "",
      Canal: "BTDIGITAL",
      Token: env.BANTOTAL_TOKEN
    },
    pais
  };

  console.log("Request a Bantotal:", body);

  const response = await bantotalApi.post<ObtenerEstadosResponse>(
    "/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerEstadosProvinciasDepartamentos=",
    body
  );

  console.log("Respuesta de Bantotal:", response.data);
  return response.data;
};