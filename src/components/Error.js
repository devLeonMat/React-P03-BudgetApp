import React from "react";
import PropTypes from 'prop-types';
import Gasto from "./Gasto";

const Error = ({mensaje}) => (
    <p className="alert alert-danger error">{mensaje}</p>
);

Error.prototype = {
    mensaje: PropTypes.string.isRequired
};

export default Error;