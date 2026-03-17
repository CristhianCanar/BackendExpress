import { ObtenerEstadosResponse } from "../models/obtener-estados-by-pais"
import { EstadoDTO } from "../models/estado.dto"

export const mapEstadoToDTO = (data: ObtenerEstadosResponse): EstadoDTO[] => {

  return data.sdtEstados.sBTEstado.map((estado) => ({
    descripcion: estado.descripcion,
    identificador: estado.identificador,
  }))
 /*  const estado = estados.find(e => e.identificador === 10); */

 /*  return estado ? estado : undefined; */
  /* return data.sdtEstados.sBTEstado.map((estado) => ({
    descripcion: estado.descripcion,
    identificador: estado.identificador,
  })) */


}