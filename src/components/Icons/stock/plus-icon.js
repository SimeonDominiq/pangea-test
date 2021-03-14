/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable max-len */
import React from 'react';
/**
 * Plus Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props) => (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
        <path
            d="M8 3.333v9.334M3.333 8h9.334"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
    </svg>
);

export default SVG;
/* eslint-enable max-len */
