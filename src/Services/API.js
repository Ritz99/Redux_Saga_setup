import axios from "axios";
import APIUrl from "./APIUrl";

class API {
  constructor() {
    this.instance = axios.create({
    //   baseURL: `${APIUrl.backendUrl}`,
    });
  }

}
const apiInstance = new API();
export default apiInstance;
