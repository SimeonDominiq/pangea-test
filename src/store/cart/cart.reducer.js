import defaultState from './cart.state';
import types from './cart.types';

const { ADD_TO_CART, UPDATE_CART, REMOVE_ITEM_FROM_CART, UPDATE_CURRENCY, UPDATE_ITEMS_CART } = types;

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            let cartData = state.data;

            const cartExists = state.data.find((item) => item.id === payload.id);
            if (cartExists) {
                const currentCart = state.data.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            qty: item.qty + 1,
                        };
                    }

                    return item;
                });

                cartData = {
                    data: currentCart,
                    selectedCurrency: state.selectedCurrency,
                };
            } else {
                cartData = {
                    data: [{ ...payload, qty: 1 }, ...state.data],
                    selectedCurrency: state.selectedCurrency,
                };
            }

            return cartData;
        case UPDATE_CART:
            const { productId, value } = payload;
            const currentCart = state.data.map((item) => {
                if (item.id === productId) {
                    return {
                        ...item,
                        qty: value,
                    };
                }

                return item;
            });

            const updatedCart = {
                data: currentCart,
                selectedCurrency: state.selectedCurrency,
            };

            return updatedCart;
        case REMOVE_ITEM_FROM_CART:
            const newCart = state.data.filter((item) => item.id !== payload.productId);

            const newCartData = {
                data: newCart,
                selectedCurrency: state.selectedCurrency,
            };

            return newCartData;
        case UPDATE_CURRENCY:
            const newCurrency = {
                data: state.data,
                selectedCurrency: payload.value,
            };

            return newCurrency;
        case UPDATE_ITEMS_CART:
            const updatedProducts = payload.products;
            const stateCart = state.data;

            const results = [];

            for (let i = 0; i < updatedProducts.length; i++) {
                for (let j = 0; j < stateCart.length; j++) {
                    if (updatedProducts[i].id === stateCart[j].id) {
                        results.push({
                            ...updatedProducts[i],
                            qty: stateCart[j].qty,
                        });
                    }
                }
            }

            const newCartItemData = {
                data: results,
                selectedCurrency: state.selectedCurrency,
            };

            return newCartItemData;

        default:
            return state;
    }
};
