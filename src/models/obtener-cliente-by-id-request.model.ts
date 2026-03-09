import { Btinreq } from './btinreq.model';

export interface ObtenerClienteByIdRequest {
  Btinreq: Btinreq;
  clienteUId: number;
}

export interface SdtPersona {
  paisDocumentoId: number;
  apartamento: string;
  sectorId: number;
  tipoDocumentoId: number;
  ingresos: number;
  nacionalidad: string;
  ocupacionId: number;
  sexo: string;
  barrio: string;
  estadoCivil: string;
  nroDocumento: string;
  localidad: string;
  clasificacionInternaId: number;
  segundoNombre: string;
  telefonoCelular: string;
  departamentoId: number;
  actividadLaboral: string;
  nacionalidadId: number;
  localidadId: number;
  clasificacionInterna: string;
  paisDomicilioId: number;
  sector: string;
  telefonoFijo: string;
  codigoPostal: string;
  primerNombre: string;
  fechaNacimiento: string;
  actividadLaboralId: number;
  primerApellido: string;
  estadoCivilId: string;
  segundoApellido: string;
  paisDocumento: string;
  fechaInicioActividad: string;
  ocupacion: string;
  paisDomicilio: string;
  departamento: string;
  fechaVencimiento: string;
  correoElectronico: string;
  numeroPuerta: string;
  calle: string;
  barrioId: number;
  tipoDocumento: string;
}

export interface BantotalPersonaResponse {
  Btinreq: Btinreq;
  sdtPersona: SdtPersona;
  Erroresnegocio: {
    BTErrorNegocio: any[];
  };
  Btoutreq: {
    Numero: number;
    Estado: string;
    Servicio: string;
    Requerimiento: string;
    Fecha: string;
    Hora: string;
    Canal: string;
  };
}