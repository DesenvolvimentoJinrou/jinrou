import axios from "axios";

export const serverURL = "jinrou-app-db-do-user-13481814-0.b.db.ondigitalocean.com"
const api = axios.create({
  // baseURL: "http://192.168.1.43:3000",
  baseURL: "jinrou-app-db-do-user-13481814-0.b.db.ondigitalocean.com:25060",
});

export default api;
