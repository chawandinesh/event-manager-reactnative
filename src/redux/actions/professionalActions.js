import {
  ADD_PROFESSIONAL_EVENT,
  DELETE_PROFESSIONAL_EVENT,
  UPDATE_PROFESSIONAL_EVENT,
} from "../actionTypes/eventActionTypes";

const atnAddProfessionalEvent = (data) => {
  return {
    type: ADD_PROFESSIONAL_EVENT,
    data,
  };
};

const atnDeleteProfessionalEvent = (index) => {
  return {
    type: DELETE_PROFESSIONAL_EVENT,
    index,
  };
};

const atnUpdateProfessionalEvent = (data, index) => {
  return {
    type: UPDATE_PROFESSIONAL_EVENT,
    data,
    index,
  };
};

export {
  atnAddProfessionalEvent,
  atnUpdateProfessionalEvent,
  atnDeleteProfessionalEvent,
};
