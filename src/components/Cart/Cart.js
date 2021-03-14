/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import SlidingPane from 'react-sliding-pane';
import CartItem from './CartItem';
import { isNotEmptyArray } from 'libs/utils';
import Button from 'utils/Button';
import { store } from 'store';

const currencies = [
    'USD',
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BWP',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JMD',
    'JPY',
    'KES',
    'KSG',
    'KHR',
    'KMF',
    'KRW',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'STD',
    'SVC',
    'SZL',
    'THB',
    'TJS',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'UYU',
    'UZS',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW',
];
/**
 *
 * @param {*} param0
 * @returns
 */
const Cart = ({ cartItems, currentCurrency, showCart, toggleCart }) => {
    const switchCurrency = (e) => {
        const { value } = e.target;

        store.dispatch({
            payload: {
                value,
            },
            type: 'UPDATE_CURRENCY',
        });
    };

    const sumCart = () => {
        if (isNotEmptyArray(cartItems)) {
            const cartSum = cartItems
                .map((item) => {
                    return {
                        ...item,
                        price: item.price * item.qty,
                    };
                })
                .reduce((a, b) => ({ price: a.price + b.price }));

            return cartSum.price;
        }

        return 0;
    };

    return (
        <SlidingPane
            className="z-index-high"
            from="right"
            isOpen={showCart}
            onRequestClose={() => toggleCart(false)}
            overlayClassName="z-index-high"
            title="Your Cart"
        >
            {isNotEmptyArray(cartItems) ? (
                <>
                    <div className="form-group w-25">
                        <select
className="form-control"
onChange={switchCurrency}
value={currentCurrency}
                        >
                            {currencies.map((currency, _i) => (
                                <option
key={_i}
value={currency}
                                >
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="cartList">
                        {cartItems.map((cart, _i) => (
                            <CartItem
cart={cart}
key={_i}
selectedCurrency={currentCurrency}
                            />
                        ))}
                    </div>

                    <div className="bottom-div">
                        <div className="d-flex justify-content-between py-3">
                            <h6>Subtotal</h6>
                            <h6>
                                {sumCart().toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: `${currentCurrency}`,
                                })}
                            </h6>
                        </div>

                        <div className="subscription mt-2 mb-3">
                            <span>Make this a subscription (Save 20%)</span>
                        </div>

                        <div className="subscription-btn">
                            <Button
className="btn btnPrimary text-uppercase btn-block py-3"
type="button"
                            >
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <h6 className="text-center">No items in your cart</h6>
            )}
        </SlidingPane>
    );
};

const mapStateToProps = ({ cart }) => {
    const { data, selectedCurrency } = cart;
    return {
        cartItems: data,
        currentCurrency: selectedCurrency,
    };
};

export default connect(mapStateToProps)(Cart);
