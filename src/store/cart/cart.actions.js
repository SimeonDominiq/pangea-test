import types from './cart.types';

const { ADD_TO_CART } = types;

/**
 * Set login success
 * @param {*} payload
 */
export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});
