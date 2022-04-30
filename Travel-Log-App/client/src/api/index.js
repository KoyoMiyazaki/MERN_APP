import axios from "axios";

const BASE_URL = "http://localhost:5000/travel-log";

export const fetchAllTravelLogs = () => axios.get(BASE_URL);
export const fetchSingleTravelLog = (id) => axios.get(`${BASE_URL}/${id}`);
export const createTravelLog = (newTravelLog) =>
  axios.post(BASE_URL, newTravelLog);
export const updateTravelLog = (id, updatedTravelLog) =>
  axios.patch(`${BASE_URL}/${id}`, updatedTravelLog);
export const deleteTravelLog = (id) => axios.delete(`${BASE_URL}/${id}`);
