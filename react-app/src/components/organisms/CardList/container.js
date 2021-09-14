import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { addNewCard } from "../../../store/actions/newCharacters";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardListReducer.cards);
  const isFetching = useSelector((state) => state.cardListReducer.isFetching);
  const errorMessage = useSelector((state) => state.cardListReducer.errorMessage);
  useEffect(() => {
    dispatch(addNewCard());
  }, [dispatch]);
  return (
    <CardList
      cards={cards}
      isFetching={isFetching}
      errorMessage={errorMessage}
    />
  );
};

export const container = CardListContainer;