import axios from "axios";

const REST_API_BASE_URL = "https://007a-2402-8100-3165-3263-dd9b-8247-af93-46f2.ngrok-free.app/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);

export const loginAdmin = (login) => axios.post(REST_API_BASE_URL +'/login', login) 