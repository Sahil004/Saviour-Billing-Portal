import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/client";

export const listClient = () => axios.get(REST_API_BASE_URL);

export const createClient = (client) => axios.post(REST_API_BASE_URL, client);
