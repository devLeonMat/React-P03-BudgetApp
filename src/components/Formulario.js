import React, {useState} from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from "./Error";

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // when the user adds an expense
    const agregarGasto = e => {
        e.preventDefault();

        // validate
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
        }
        guardarError(false);

        // build the expense
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        // send expense to principal component
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // form reset
        guardarNombre('');
        guardarCantidad(0);


    };


    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son incorrectos o Presupuesto incorrecto "/> : null}
            <div className="campo">
                <label htmlFor="nameExpenditure">Nombre Gasto</label>
                <input type="text" id="nameExpenditure"
                       className="u-full-width"
                       value={nombre}
                       onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label
                    htmlFor="valueExpenditure">Cantidad Gasto</label>
                <input type="number" id="valueExpenditure"
                       className="u-full-width"
                       value={cantidad}
                       onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
};

Formulario.prototype = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
};

export default Formulario;