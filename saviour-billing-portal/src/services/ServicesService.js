import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/services";

export const createService = (services) => axios.post(REST_API_BASE_URL, services);