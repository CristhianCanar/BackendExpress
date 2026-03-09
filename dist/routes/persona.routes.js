"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_controller_1 = require("../controllers/persona.controller");
const router = (0, express_1.Router)();
// GET /api/personas/181
router.get("/:idCliente", persona_controller_1.getPersona);
exports.default = router;
//# sourceMappingURL=persona.routes.js.map