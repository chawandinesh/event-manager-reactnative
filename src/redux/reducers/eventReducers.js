import {
  ADD_OTHER_EVENT,
  DELETE_OTHER_EVENT,
  UPDATE_OTHER_EVENT,
  ADD_PERSONAL_EVENT,
  DELETE_PERSONAL_EVENT,
  UPDATE_PERSONAL_EVENT,
  ADD_PROFESSIONAL_EVENT,
  DELETE_PROFESSIONAL_EVENT,
  UPDATE_PROFESSIONAL_EVENT,
  ADD_SOCIAL_EVENT,
  DELETE_SOCIAL_EVENT,
  UPDATE_SOCIAL_EVENT,
} from "../actionTypes/eventActionTypes";

const initaialState = {
  otherEvents: [],
  socialEvents: [],
  personalEvents: [],
  professionalEvents: [],
};

const reducer = (state = initaialState, action) => {
  switch (action.type) {
    case ADD_OTHER_EVENT:
      return { ...state, otherEvents: [...state.otherEvents, action.data] };
    case DELETE_OTHER_EVENT:
      return {
        ...state,
        otherEvents: state.otherEvents.filter((e, idx) => idx !== action.index),
      };
    case UPDATE_OTHER_EVENT:
      let otherLast = state.otherEvents.findIndex(
        (data, idx) => idx === action.index
      );
      state.otherEvents[otherLast] = action.data;
      return {
        ...state,
        otherEvents: state.otherEvents,
      };

    case ADD_PERSONAL_EVENT:
      return {
        ...state,
        personalEvents: [...state.personalEvents, action.data],
      };
    case DELETE_PERSONAL_EVENT:
      return {
        ...state,
        personalEvents: state.personalEvents.filter(
          (e, idx) => idx !== action.index
        ),
      };
    case UPDATE_PERSONAL_EVENT:
      let personalLast = state.personalEvents.findIndex(
        (data, idx) => idx === action.index
      );
      state.personalEvents[personalLast] = action.data;
      return {
        ...state,
        personalEvents: state.personalEvents,
      };

    case ADD_PROFESSIONAL_EVENT:
      return {
        ...state,
        professionalEvents: [...state.professionalEvents, action.data],
      };
    case DELETE_PROFESSIONAL_EVENT:
      return {
        ...state,
        professionalEvents: state.professionalEvents.filter(
          (e, idx) => idx !== action.index
        ),
      };
    case UPDATE_PROFESSIONAL_EVENT:
      let professionalLast = state.professionalEvents.findIndex(
        (data, idx) => idx === action.index
      );
      state.professionalEvents[professionalLast] = action.data;
      return {
        ...state,
        professionalEvents: state.professionalEvents,
      };

    case ADD_SOCIAL_EVENT:
      return { ...state, socialEvents: [...state.socialEvents, action.data] };
    case DELETE_SOCIAL_EVENT:
      return {
        ...state,
        socialEvents: state.socialEvents.filter(
          (e, idx) => idx !== action.index
        ),
      };
    case UPDATE_SOCIAL_EVENT:
      let socialLast = state.socialEvents.findIndex(
        (data, idx) => idx === action.index
      );
      state.socialEvents[socialLast] = action.data;
      return {
        ...state,
        socialEvents: state.socialEvents,
      };
    default:
      return state;
  }
};

export default reducer;
