import React from 'react';
import { isNotEmptyArray } from 'libs/utils';
import { store } from 'store';
import Button from 'utils/Button';
import './ProductLists.scss';

const ProductLists = ({ products, toggleCart, selectedCurrency }) => {
    const addToCart = async (product) => {
        await store.dispatch({
            payload: product,
            type: 'ADD_TO_CART',
        });

        toggleCart(true);
    };

    return (
        isNotEmptyArray(products) &&
        products.map((product, _i) => {
            return (
                <div
                    className="col-lg-4 col-6 product text-center"
                    key={_i}
                >
                    <img
                        className="img-fluid"
                        src={product.image_url}
                    />
                    <h6 className="mt-4">{product.title}</h6>

                    <span className="d-block py-2">
                        From{' '}
                        {product.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: `${selectedCurrency}`,
                        })}
                    </span>

                    <Button
                        className="btn btnPrimary px-5 py-3 mt-3"
                        onClick={() => addToCart(product)}
                        type="button"
                    >
                        Add to Cart
                    </Button>
                </div>
            );
        })
    );
};

export default ProductLists;
