import React from "react";

export const Nota = ({ nota, borrarNota }) => {
    const deleteNota = () => {
        borrarNota(nota.id);
    };
    return <li onClick={deleteNota}>{nota.nombre}</li>;
};
