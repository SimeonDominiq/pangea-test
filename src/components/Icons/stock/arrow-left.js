/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable max-len */
import React from 'react';
/**
 * Arrow Left Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props) => (
    <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15.834 10H4.167M10 15.833L4.167 10 10 4.167"
            stroke="#D82323"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
    </svg>
);

export default SVG;
/* eslint-enable max-len */
