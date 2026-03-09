import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`🚀 Bantotal Exposer corriendo en puerto  http://localhost:${env.PORT}`);
});