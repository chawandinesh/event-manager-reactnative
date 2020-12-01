import {
  ADD_PERSONAL_EVENT,
  DELETE_PERSONAL_EVENT,
  UPDATE_PERSONAL_EVENT,
} from "../actionTypes/eventActionTypes";

const atnAddPersonalEvent = (data) => {
  return {
    type: ADD_PERSONAL_EVENT,
    data,
  };
};

const atnDeletePersonalEvent = (index) => {
  return {
    type: DELETE_PERSONAL_EVENT,
    index,
  };
};

const atnUpdatePersonalEvent = (data, index) => {
  return {
    type: UPDATE_PERSONAL_EVENT,
    data,
    index,
  };
};

export { atnAddPersonalEvent, atnUpdatePersonalEvent, atnDeletePersonalEvent };
