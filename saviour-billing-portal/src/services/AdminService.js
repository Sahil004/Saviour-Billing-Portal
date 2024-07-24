import axios from "axios";

const REST_API_BASE_URL = "https://ac28-49-15-228-44.ngrok-free.app/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);

export const loginAdmin = (login) => axios.post(REST_API_BASE_URL +'/login', login) 