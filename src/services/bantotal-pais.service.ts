import axios from "axios";
import { env } from "../config/env";
import {
  ObtenerPaisesResponse,
  ObtenerPaisesRequest
} from "../models/obtener-paises";


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

export const obtenerEstadosByPaisIdBantotal = async (): Promise<ObtenerPaisesResponse> => {
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