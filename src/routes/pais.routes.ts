import { Router } from "express";
import { getEstadosbyPaisId, getPaises } from "../controllers/pais.controller";

const router = Router();

router.get("", getPaises);
router.get("/estados/:idPais", getEstadosbyPaisId);
/* router.get("/:idPais", getPersona); */

export default router;