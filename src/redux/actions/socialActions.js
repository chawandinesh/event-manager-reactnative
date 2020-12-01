import {
  ADD_SOCIAL_EVENT,
  DELETE_SOCIAL_EVENT,
  UPDATE_SOCIAL_EVENT,
} from "../actionTypes/eventActionTypes";

const atnAddSocialEvent = (data) => {
  return {
    type: ADD_SOCIAL_EVENT,
    data,
  };
};

const atnDeleteSocialEvent = (index) => {
  return {
    type: DELETE_SOCIAL_EVENT,
    index,
  };
};

const atnUpdateSocialEvent = (data, index) => {
  return {
    type: UPDATE_SOCIAL_EVENT,
    data,
    index,
  };
};

export { atnAddSocialEvent, atnUpdateSocialEvent, atnDeleteSocialEvent };
