import { server } from "./service/Server";

server.listen(process.env.PORT, () => console.log("Porta Rodando " + process.env.PORT));
