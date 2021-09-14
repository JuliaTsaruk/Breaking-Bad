import { NEW_CHARACTERS } from "../actionTypes/newCharacters";
import { DATA_IS_FETCHING } from "../actionTypes/newCharacters";
import { DATA_ERROR } from "../actionTypes/newCharacters";
import Repository from "../../repository";

export const addNewCharacter = (cards) => ({
  type: NEW_CHARACTERS,
  payload: cards,
});
export const dataIsFetching = (data) => ({
  type: DATA_IS_FETCHING,
  payload: data,
});
export const cardListError = (errorMessage) => ({
  type: DATA_ERROR,
  payload: errorMessage,
});

export const addNewCard = () => {
  return async (dispatch) => {
    try {
      dispatch(dataIsFetching(true));
      const { value } = await Repository.APICardsList.createCardList();
      dispatch(addNewCharacter(value));
    } catch (error) {
      dispatch(dataIsFetching(false));
      dispatch(cardListError(true));
    }
  };
};