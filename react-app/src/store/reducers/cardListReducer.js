import {
  DATA_ERROR,
  DATA_IS_FETCHING,
  NEW_CHARACTERS,
} from "../actionTypes/newCharacters";

const initialState = {
  cards: [],
  isFetching: true,
  errorMessage: false,
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CHARACTERS:
      return {
        ...state,
        cards: action.payload,
        isFetching: false,
        errorMessage: false,
      };
    case DATA_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case DATA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default cardListReducer;