export interface ClienteDTO {
  nombre: string;
  documento: string;
  nacionalidad: string;
  ingresos: number;
}

export interface BantotalClienteResponse {
  nombreCompleto: string;
  numeroDocumento: string;
  nacionalidad: string;
  ingresos: number;
}

export interface ClienteParams {
  idCliente: string;
}