import {
  FETCH_SINGLE,
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionType.js";

export default (travelLogs = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE:
      return action.payload;
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...travelLogs, action.payload];
    case UPDATE:
      return travelLogs.map((travelLog) =>
        travelLog._id === action.payload._id ? action.payload : travelLog
      );
    case DELETE:
      return travelLogs.filter((travelLog) => travelLog._id !== action.payload);
    default:
      break;
  }
};
