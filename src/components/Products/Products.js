/* eslint-disable indent */
import React from 'react';
import { store } from 'store';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'utils/Loader';
import ProductLists from './ProductLists';
import { GET_PRODUCTS } from 'libs/product.queries';
import { isNotEmptyArray } from 'libs/utils';

const Products = ({ toggleCart, selectedCurrency = 'USD' }) => {
    const { loading, error, data } = useQuery(GET_PRODUCTS(selectedCurrency));

    if (loading) return <Loader visible />;

    if (error) return <p>An error occured!</p>;

    if (isNotEmptyArray(data.products)) {
        store.dispatch({
            payload: data,
            type: 'UPDATE_ITEMS_CART',
        });
    }

    return <ProductLists
products={data.products}
selectedCurrency={selectedCurrency}
toggleCart={toggleCart}
           />;
};

const mapStateToProps = ({ cart }) => {
    const { selectedCurrency } = cart;
    return {
        selectedCurrency,
    };
};

export default connect(mapStateToProps)(Products);
