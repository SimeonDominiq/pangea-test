import React from 'react';
import { store } from 'store';
import Icon from 'components/Icons';
import QuantityBox from 'utils/QuantitytBox';
import './CartItem.scss';

const CartItem = ({ cart, selectedCurrency }) => {
    const handleQuantityChange = (productId, value) => {
        store.dispatch({
            payload: {
                productId,
                value,
            },
            type: 'UPDATE_CART',
        });
    };

    const removeItem = (productId) => {
        store.dispatch({
            payload: {
                productId,
            },
            type: 'REMOVE_ITEM_FROM_CART',
        });
    };

    const price = cart.price * cart.qty;

    return (
        <div className="card mb-3 cartItem">
            <div className="card-body p-3">
                <Icon
                    name="close"
                    onClick={() => removeItem(cart.id)}
                />
                <h6 className="text-truncate">{cart.title}</h6>
                <div className="text-right">
                    <img
                        className="img-fluid"
                        src={cart.image_url}
                    />
                </div>
                <div className="row mt-4 align-items-center">
                    <div className="col-lg-4 col-6">
                        <QuantityBox
                            maxValue={0}
                            onValueChange={handleQuantityChange}
                            productId={cart.id}
                            value={cart.qty}
                        />
                    </div>

                    <div className="col-6 text-center">
                        <span>
                            {price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: `${selectedCurrency}`,
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
