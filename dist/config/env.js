"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.env = {
    PORT: process.env.PORT || 3000,
    BANTOTAL_URL: process.env.BANTOTAL_URL || "",
    BANTOTAL_TOKEN: process.env.BANTOTAL_TOKEN || ""
};
//# sourceMappingURL=env.js.map