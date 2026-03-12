import { Btinreq } from './btinreq.model';

export interface ObtenerEstadosByPaisRequest {
  Btinreq: Btinreq;
  pais: number;
}

export interface BTEstado{
  identificador: number;
  descripcion: string;
}

export interface ObtenerEstadosResponse {
  sdtEstados: {
    sBTEstado: BTEstado[];
  };
}


