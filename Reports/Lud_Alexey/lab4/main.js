import {LOG} from "./modules/log.js";
import {API} from "./modules/api.js";
import {VIEW} from "./modules/view.js";
import {Search} from "./modules/search.js";

const api = new API();

new Search(new LOG(), api, new VIEW(api));