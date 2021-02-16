import React from "react";
import { Nota } from "./Nota";

export const Notas = ({ notas, borrarNota }) => {
    // const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            {notas.map((nota) => (
                <Nota key={nota.id} nota={nota} borrarNota={borrarNota} />
            ))}
        </div>
    );
};
