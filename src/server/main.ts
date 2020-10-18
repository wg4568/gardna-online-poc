import init_gameserver from "./game/server";
import init_webserver from "./web/server";

const webserver = init_webserver();
const gameserver = init_gameserver(webserver);
