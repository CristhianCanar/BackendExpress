"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* import { Request, Response } from "express";
import { obtenerClienteBantotal } from "../services/bantotal.service";
import { ClienteDTO } from "../models/cliente.model";
import { ObtenerClienteByIdRequest } from "../models/obtener-cliente-by-id-request.model";

export const getCliente = async (req: Request<ObtenerClienteByIdRequest>, res: Response): Promise<void> => {
  try {
    const idCliente = req.params.idCliente;

    const clienteCore = await obtenerClienteBantotal(idCliente);

    const request: ObtenerPaisesRequest = {
      Btinreq: {
        Device: 'AV',
        Usuario: 'INSTALADOR',
        Requerimiento: '',
        Canal: 'BTDIGITAL',
        Token: '9ba6c4849eCD285A89A23FBE'
      }
    };
    // Adapter Pattern → Core → Frontend
    const cliente: ClienteDTO = {
      nombre: clienteCore.nombreCompleto.trim(),
      documento: clienteCore.numeroDocumento,
      nacionalidad: clienteCore.nacionalidad.trim(),
      ingresos: Number(clienteCore.ingresos)
    };

    res.json(cliente);
  } catch (error: any) {
    res.status(500).json({
      message: "Error consultando cliente en Bantotal",
      detail: error.message
    });
  }
}; */ 
//# sourceMappingURL=cliente.controller.js.map