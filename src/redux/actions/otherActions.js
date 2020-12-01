import {
  ADD_OTHER_EVENT,
  DELETE_OTHER_EVENT,
  UPDATE_OTHER_EVENT,
} from "../actionTypes/eventActionTypes";

const atnAddOtherEvent = (data) => {
  return {
    type: ADD_OTHER_EVENT,
    data,
  };
};

const atnDeleteOtherEvent = (index) => {
  return {
    type: DELETE_OTHER_EVENT,
    index,
  };
};

const atnUpdateOtherEvent = (data, index) => {
  return {
    type: UPDATE_OTHER_EVENT,
    data,
    index,
  };
};

export { atnAddOtherEvent, atnUpdateOtherEvent, atnDeleteOtherEvent };
