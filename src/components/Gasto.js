import React from "react";
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">S/. {gasto.cantidad}</span>
        </p>
    </li>
);

Gasto.prototype = {
    gasto: PropTypes.object.isRequired
};

export default Gasto;