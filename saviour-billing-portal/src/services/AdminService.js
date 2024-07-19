import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);