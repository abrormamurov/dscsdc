import axios from "axios";

const url =
  "https://online-json-server-api.up.railway.app/project/665fec471d2cd3eb1142ad6d";
export const customFetch = axios.create({
  baseURL: url,
});
