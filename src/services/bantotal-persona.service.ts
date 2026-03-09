import axios from "axios";
import { env } from "../config/env";
import {
  BantotalPersonaResponse,
  ObtenerClienteByIdRequest
} from "../models/obtener-cliente-by-id-request.model";


const bantotalApi = axios.create({
  baseURL: env.BANTOTAL_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const obtenerPersonaBantotal = async (
  clienteUId: number
): Promise<BantotalPersonaResponse> => {
  const body: ObtenerClienteByIdRequest = {
    Btinreq: {
      Device: "AV",
      Usuario: "INSTALADOR",
      Requerimiento: "",
      Canal: "BTDIGITAL",
      Token: env.BANTOTAL_TOKEN
    },
    clienteUId
  };

  const response = await bantotalApi.post<BantotalPersonaResponse>(
    "/com.dlya.bantotal.odwsbt_BTClientes_v1?Obtener=",
    body
  );

  return response.data;
};