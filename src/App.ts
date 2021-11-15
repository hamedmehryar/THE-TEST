import {Server} from "./Server";
import Config from "./Config";

export default new Server(Config.Port, Config.MongoURI).start();