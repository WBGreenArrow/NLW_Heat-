import axios from "axios";

export const api = axios.create({
    // LOCAL IP + PORT 4000 FROM BACK_END "http://xxx.xxx.xx.xxx:4000"
    baseURL: "",
});
