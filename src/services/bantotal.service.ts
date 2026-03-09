import axios from "axios";
import { env } from "../config/env";
import { BantotalClienteResponse } from "../models/cliente.model";
import { ObtenerClienteByIdRequest } from "../models/obtener-cliente-by-id-request.model";

const bantotalApi = axios.create({
  baseURL: env.BANTOTAL_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },
  timeout: 10000
});

export const obtenerClienteBantotal = async (
  request: ObtenerClienteByIdRequest
): Promise<BantotalClienteResponse> => {

  const url = `/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPaises=`;

  const response = await bantotalApi.post<BantotalClienteResponse>(
      url,
      request
  );
  return response.data;
};