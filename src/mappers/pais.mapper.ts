import { ObtenerPaisesResponse } from "../models/obtener-paises"
import { PaisDTO } from "../models/pais.dto"

export const mapPaisesToDTO = (data: ObtenerPaisesResponse): PaisDTO[] => {

  return data.sdtPaises.sBTPais.map((pais) => ({
    paisISO2: pais.paisISO2,
    paisISO: pais.paisISO,
    descripcion: pais.descripcion,
    identificador: pais.identificador,
    paisUnicode: pais.paisUnicode
  }))

}