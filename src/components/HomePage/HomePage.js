import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Partials/Header';
import Products from 'components/Products';
import Cart from 'components/Cart';

import './HomePage.scss';

/**
 *
 */
class HomePage extends Component {
    state = {
        showCart: false,
    };

    toggleCart = (bool) => this.setState({ showCart: bool });

    /**
     * React Render
     * @returns {Component} React component
     */
    render() {
        const { cartItems, selectedCurrency } = this.props;
        const { showCart } = this.state;

        return (
            <>
                <Header
                    cartCount={cartItems.length || 0}
                    toggleCart={this.toggleCart}
                />

                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-8">
                                <h1>All Products</h1>
                                <h6>A 360 look at lumin</h6>
                            </div>

                            <div className="col-lg-4">
                                <select
                                    className="form-control"
                                    name="filter"
                                >
                                    <option>Filter by</option>
                                    <option value="price">Price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="products-listing py-5">
                    <div className="container">
                        <div className="row">
                            <Products
                                key={selectedCurrency}
                                toggleCart={this.toggleCart}
                            />
                        </div>
                    </div>
                </section>

                <Cart
                    showCart={showCart}
                    toggleCart={this.toggleCart}
                />
            </>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    const { data, selectedCurrency } = cart;
    return {
        cartItems: data,
        selectedCurrency,
    };
};

export default connect(mapStateToProps)(HomePage);
