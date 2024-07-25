import axios from "axios";

const REST_API_BASE_URL = "https://c38d-2402-8100-318c-2d15-ecd5-4d8e-e59a-c2c3.ngrok-free.app/api/admin";

export const createAdmin = (admin) => axios.post(REST_API_BASE_URL +'/addAdmin', admin);

export const loginAdmin = (login) => axios.post(REST_API_BASE_URL +'/login', login) 