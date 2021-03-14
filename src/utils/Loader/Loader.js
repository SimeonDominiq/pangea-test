import React from 'react';
import './Loader.scss';

/**
 * Loader
 * @param {*} visible
 */
const Loader = (visible) => {
    if (!visible) return null;

    return <div className="spinner">&nbsp;</div>;
};

export default Loader;
