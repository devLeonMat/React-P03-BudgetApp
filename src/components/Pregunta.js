import React, {Fragment, useState} from "react";
import PropTypes from 'prop-types';
import Error from "./Error";
import ControlPresupuesto from "./ControlPresupuesto";

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // definir el state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))

    };

    // submit para definjr el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    };

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto"/> : null}
            <form onSubmit={agregarPresupuesto}>
                <input type="number"
                       className="u-full-width"
                       placeholder="Coloca tu presupuesto"
                       onChange={definirPresupuesto}
                />
                <input type="submit"
                       className="button-primary u-full-width"
                       value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    )
};

Pregunta.prototype = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
};

export default Pregunta;