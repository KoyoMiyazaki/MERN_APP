import {
  FETCH_SINGLE,
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionType.js";
import * as api from "../api";

export const getAllTravelLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllTravelLogs();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleTravelLog = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleTravelLog(id);
    dispatch({ type: FETCH_SINGLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTravelLog = (newTravelLog) => async (dispatch) => {
  try {
    const { data } = await api.createTravelLog(newTravelLog);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTravelLog = (id, updatedTravelLog) => async (dispatch) => {
  try {
    const { data } = await api.updateTravelLog(id, updatedTravelLog);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTravelLog = (id) => async (dispatch) => {
  try {
    await api.deleteTravelLog(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
