import axios from "axios";

const REST_API_BASE_URL = "https://6413-152-58-16-220.ngrok-free.app/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);

export const loginAdmin = (login) => axios.post(REST_API_BASE_URL +'/login', login) 