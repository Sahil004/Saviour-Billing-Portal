import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/services";

export const createService = (services) => axios.post(REST_API_BASE_URL, services);

export const listServices = () => axios.get(REST_API_BASE_URL);

export const deleteService = (serviceId) => axios.delete(REST_API_BASE_URL + '/' +serviceId);

export const getService = (serviceId) => axios.get(REST_API_BASE_URL+"/"+serviceId);

export const updateService = (serviceId, service) => axios.put(REST_API_BASE_URL+"/"+serviceId, service);