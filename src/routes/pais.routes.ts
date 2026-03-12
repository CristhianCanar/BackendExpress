import { Router } from "express";
import { getPaises } from "../controllers/pais.controller";

const router = Router();

router.get("", getPaises);
router.get("/:idPais", getPaises);
/* router.get("/:idPais", getPersona); */

export default router;