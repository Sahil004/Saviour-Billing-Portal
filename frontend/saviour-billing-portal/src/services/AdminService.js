import axios from "axios";

const REST_API_BASE_URL = "https://1e26-2402-8100-3001-c797-e0f0-286f-4604-11dd.ngrok-free.app/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);

export const loginAdmin = (login) => axios.post(REST_API_BASE_URL +'/login', login) 