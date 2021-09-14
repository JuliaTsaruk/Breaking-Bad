import axios from "axios";

class CardList {
  createCardList = async (cards) => {
    let result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters?limit=10",
        cards
      );
      result.value = response.data;
    } catch (error) {
      result.error = error.response.data;
    }
    return result;
  };
}

export default new CardList();