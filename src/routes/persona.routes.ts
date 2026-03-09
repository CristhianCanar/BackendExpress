import { Router } from "express";
import { getPersona } from "../controllers/persona.controller";

const router = Router();

// GET /api/personas/181
router.get("/:idCliente", getPersona);

export default router;