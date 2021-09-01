export const initialState = {
  cart: [],
  coupon: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id})`);
      }
      // return state;
      return { ...state, cart: newCart };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "APPLY_COUPON":
      return {
        ...state,
        coupon: true,
      };
    default:
      return state;
  }
};

export default reducer;
