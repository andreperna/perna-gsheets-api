import { api } from "../api/api.js";
import { serverConfig } from "./config/config.js";

import http from "node:http";

// create function start server
function start() {
  const server = http.createServer(api);

  const port = serverConfig.port;
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port: ${port}`);
  });
}

export const server = { start }

