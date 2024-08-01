import axios from "axios";

const REST_API_BASE_URL = "https://3cbc-2402-8100-3165-3263-ac63-738e-f054-545.ngrok-free.app/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);

export const loginAdmin = (login) => axios.post(REST_API_BASE_URL +'/login', login) 