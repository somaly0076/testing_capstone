import axios from "axios";
import PORT from "../constants"


const baseURL = "http://localhost:3000/"

const apiClient = axios.create({
  baseURL: "http://localhost:1618/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
