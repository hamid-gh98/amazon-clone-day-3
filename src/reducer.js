export const initialState = {
  basket: [],
  user: null,
};

// Selector
// item.price will be add to total amount, and the initial of amount should be 0
// all of item price add it to final amount and return (like for interloop)
// and we add ? after basket like this => basket?.length
// to prevent from eror :(
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      // return whatever the store basket (...state) was previously
      // but change the basket and filter item with id
      // **** the problem of this botton code is => ***
      // when we add same item like 4 times and then we click on remove
      // it will delete all of that item but we dont want this
      // we want to remove one of them that we clicked
      // so we dont use code bellow, and we use code up
      // **** ==> code start:
      // return {
      //   ...state,
      //   basket: state.basket.filter((item) => item.id !== action.id),
      // };
      // **** ==> code end;
      // better to use this, so we get index of item that we want to delete
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remvoe product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
