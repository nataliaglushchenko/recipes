import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    message: PropTypes.string
};

const defaultProps = {
    message: 'Oops, there was an error...'
};

const ErrorMessage = ({ message }) => {
    return <div>{message}</div>;
};

ErrorMessage.defaultProps = defaultProps;
ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
