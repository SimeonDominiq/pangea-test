/* eslint-disable indent */
import React from 'react';

/**
 * Util to convert a string to a slug format
 * @param {string} text The string to format
 * @returns {string} The resulting string
 */
export const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '_') // Replace spaces with _
        .replace(/\-+/g, '_') // Replace all - with _
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\_\_+/g, '_') // Replace multiple _ with single _
        .replace(/^_+/, '') // Trim _ from start of text
        .replace(/_+$/, ''); // Trim _ from end of text

/**
 * Checks if an array is empty
 * @param {Array} arr Array to be tested
 * @returns {Boolean} Boolean value
 */
export const isNotEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;

/**
 * Delete an array of keys from a given object
 * @param {Object} targetObj Object to remove propeties from
 * @param {Array} props Array of object properties to be deleted
 * @returns {Object} A copy of the orginal object excluding the specified properties
 */
export const omit = (targetObj, props) => {
    // Clone the targetObj to avoid mutating the original data
    const obj = Object.assign({}, targetObj);

    if (!Array.isArray(props)) {
        return;
    }

    props.forEach((prop) => {
        obj.hasOwnProperty(prop) && delete obj[prop];
    });

    return obj;
};

/**
 * Helper to check that a link points to an external url rather than a relative path
 * @param {*} url The url
 * @returns {Boolean} The result
 */
export const isExternalUrl = (url) => url && String(url).indexOf('http') > -1;

/**
 * Return file extension
 * @param {string} fileName file name
 *
 * @returns {string} Empty string or file extension
 */
export const getFileExtenion = (fileName) => {
    if (!fileName) {
        return '';
    }
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || '';
};

/**
 * Pick an array of keys from a given object
 * @param {Object} targetObj Object to remove propeties from
 * @param {Array} props Array of object properties to be deleted
 * @returns {Object} A new object that has the specified properties
 */
export const pick = (targetObj, props) => {
    const picked = {};

    if (!Array.isArray(props)) {
        return;
    }

    props.forEach((prop) => {
        if (targetObj.hasOwnProperty(prop)) {
            picked[prop] = targetObj[prop];
        }
    });

    return picked;
};

/**
 * Checks if an object has no set properties
 * @param {*} obj The object to test
 * @returns {*} boolean
 */
export const isObjectEmpty = (obj = {}) => !obj || Object.keys(obj).length === 0;

/**
 * Return a user-friendly format for a number
 * @param {Number} number Passed number
 * @returns {String} Formatted number string
 */
export const formatNumber = (number, showKobo = false) => {
    if ((!number && number !== 0) || isNaN(number)) {
        return '';
    }

    return showKobo
        ? parseInt(number)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        : number.toLocaleString();
};

/**
 * Return a user-friendly format for a number forcing a decimal place
 * @param {Number} number Passed number
 * @returns {String} Formatted number string
 */
export const formatFloat = (number) => {
    if ((!number && number !== 0) || isNaN(number)) {
        return '';
    }

    const floatVal = parseFloat(number);
    const decimalVal = floatVal % 1 === 0 ? `${floatVal}.0` : floatVal;

    return decimalVal.toLocaleString();
};

/**
 * Format a given number to a currency format
 * NOTE: If we ever need to format for different currencies, this is be a good place to do that :)
 * @param {Number} price The given price
 * @returns {String} Formatted price
 */
export const formatMoney = (price, showKobo = false) => {
    if (!price && price !== 0) {
        return '';
    }

    return <>N{formatNumber(price, showKobo)}</>;
};

/**
 * Format a money string to a currency format
 * @param {String} price The given price
 * @returns {String} Formatted price
 */
export const formatMoneyString = (price) => {
    const priceNumber = parseFloat(price.replace(/[, ]+/g, '').trim());

    return formatMoney(priceNumber);
};

/**
 * Ensure that a given string matches the character count and ellipsized at that point
 * @param {String} text Target text
 * @param {Number} numChars Number of characters needed
 * @returns {String} Truncated text
 */
export const truncateMultilineText = (text, numChars) => {
    if (!text) return '';

    // Because '...' will be appended to long strings,
    // this ensures that the entire character count is as specified
    const maxStringLength = numChars - 3;

    return maxStringLength > text.length ? text : `${text.trim().substring(0, maxStringLength)}...`;
};

/**
 * Helper function to prevent default event handling and call a specified handler
 * @param {A} event The DOM event
 * @param {A} handler The callback to handle the event
 * @returns {*} undefined
 */
export const handleDOMEvent = (event, handler) => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof handler === 'function') handler(event);
};

/**
 * Building query parameters based on injected query object;
 * object of format { "phone": "09091234321", "category_id": 1234  } is converted
 * to string of the following format 'phone: "09091234321", category_id: 1234'
 * @param {object} queryObj The object to format
 * @returns {*} The formatted object
 */
export const stripBraces = (queryObj) => {
    //STEP 1: Removing '"' around object keys in the json string
    let _queryObj = JSON.stringify(queryObj).replace(/"\w*":/g, (str) => {
        return str.replace(/"+/g, '');
    });

    //STEP 2: removing '{' and '}' around the json string
    _queryObj = _queryObj.replace(/(^[{])/, '').replace(/(}(?=[^}]*$))/, '');

    return _queryObj;
};

/**
 * Function that does nothing:
 * Useful as a default value for an optional Component prop
 * that's of type - function
 * Or for stubbing function calls in Tests and Storybook Docs
 * @returns {*} undefined
 */
export const noOp = () => {};

/**
 * Method to extract error message from error response object
 * @returns {*} The error messgae
 */
export const extractErrorMessage = (err) => {
    const errResponse = err.response || null;

    const errorMessage =
        errResponse === null
            ? 'Something went Wrong. Please try again'
            : errResponse && errResponse.data && errResponse.data.message
            ? errResponse.data.message
            : 'Something went Wrong. Please try again';

    return errorMessage;
};

/**
 * Method to Extract initials from Full name
 * @param {string} name name
 * @returns {string} initials
 */
export const getInitials = (name) => {
    const fullName = name.split(' '),
        initials = fullName[0].substring(0, 1).toUpperCase();

    if (fullName.length > 1) {
        initials.concat(fullName[fullName.length - 1].substring(0, 1).toUpperCase());
    }

    return initials;
};

/**
 * convert isoDate to human readable date
 * @param {*} date date
 * @returns {string} date
 */
export const humanReadableDate = (date, separator = '/') => {
    if (date === '') return '';
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${[day, month, year].join(separator)}`;
};

/**
 *
 * @param {*} link
 */
export const determineActiveMenu = (link) => {
    return window.location.pathname.includes(link) ? 'active' : '';
};

/**
 *
 */
export const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

/**
 * Separates a given string with a hyphen
 * @param {String} parameter The string to be parsed
 * @returns {String} parameter The hyphenated string
 */
export const hyphenate = (parameter) => parameter && parameter.toLowerCase().split(' ').join('-');

/**
 * Method to search nested tree
 * @param {*} entireObj
 * @param {*} keyToFind
 * @param {*} valToFind
 */
export const searchNestedObj = (entireObj, keyToFind, valToFind) => {
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
        if (nestedValue && nestedValue[keyToFind] === valToFind) {
            foundObj = nestedValue;
        }
        return nestedValue;
    });
    return foundObj;
};

/**
 * Handles singularity and plurality
 * @param {Number} param Given parameter
 * @returns {String} string
 */
export const checkPlurality = (param) => {
    const plural = param && param > 1;
    return plural ? 's' : '';
};

/**
 * [debounce: forces a function to execute only once after a set time]
 * @param {*} ctx
 * @param {*} func
 * @param {*} delay
 * @return {function} [The debounced function]
 */
export const debounce = (ctx, func, delay) => {
    let timeout;

    return (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            func.apply(ctx, args);
        }, delay);
    };
};

/*
 * Generates an alpha numeric string
 * @link http://bit.ly/1AEPJuH
 * @param {number} length The length of the string
 * @returns {string} The generated string
 */
export const generateAlphaNumericString = (length = 5) =>
    Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))
        .toString(36)
        .slice(1);

/**
 * Remove keys with null/falsy values from a given object (doesn't mutate the object)
 * @param {Object} obj Target obj
 * @returns {Object} The new object
 */
export const removeEmptyObjectKeys = (obj) => {
    const newObj = Object.assign({}, obj);

    Object.keys(newObj).forEach((key) => {
        if (!newObj[key]) delete newObj[key];
    });

    return newObj;
};
