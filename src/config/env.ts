import dotenv = require('dotenv');

dotenv.config(); 

export const env = {
  PORT: process.env.PORT || 3000,
  BANTOTAL_URL: process.env.BANTOTAL_URL || "",
  BANTOTAL_TOKEN: process.env.BANTOTAL_TOKEN || ""
};
