import React from 'react';
import PropTypes from 'prop-types';
import { noOp } from 'libs/utils';
import { Link } from 'react-router-dom';
import './Button.scss';

/**
 * Renders the actual content of the Button
 * @param {Object} children Render Data
 * @param {boolean} loading Loading state
 * @returns {Component} Button component
 */
const renderContent = (children, loading) => <>{loading ? 'Loading...' : children}</>;

/**
 *
 * @param {*} param0
 */
const Button = ({ children, className, disabled, link = '', onClick, loading, type }) => {
    return (
        <>
            {link ? (
                <Link
                    className={className}
                    to={link}
                >
                    {renderContent(children, loading)}
                </Link>
            ) : (
                <button
                    className={className}
                    disabled={disabled}
                    onClick={onClick}
                    type={type}
                >
                    {renderContent(children, loading)}
                </button>
            )}
        </>
    );
};

Button.defaultProps = {
    className: '',
    loading: false,
    link: '',
    disabled: false,
    onClick: noOp,
};

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    link: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
