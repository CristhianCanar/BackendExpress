import { Btinreq } from './btinreq.model';

export interface ObtenerPaisesRequest {
  Btinreq: Btinreq;
}

export interface BTPais {
  paisISO2: string;
  descripcion: string;
  paisISO: string;
  identificador: number;
  paisUnicode: string;
}

export interface ObtenerPaisesResponse {
  sdtPaises: {
    sBTPais: BTPais[];
  };
}

