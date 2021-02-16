import { useState } from "react";
import { Notas } from "./Notas";

export const NotaScreen = () => {
    const [notaIngresada, setNotaIngresada] = useState("");

    const [notas, setNotas] = useState([]);

    const handleChange = (e) => {
        setNotaIngresada(e.target.value);
    };

    const borrarNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
    };

    const crearNota = (e) => {
        e.preventDefault();
        const nuevaNota = {
            nombre: notaIngresada,
            id: Date.now(),
        };

        setNotas([...notas, nuevaNota]);
    };

    return (
        <div>
            <h1>Nota Screen</h1>
            <form>
                <input
                    type='text'
                    placeholder='nota'
                    name='notaIngresada'
                    value={notaIngresada}
                    onChange={handleChange}
                />
                <button type='submit' onClick={crearNota}>
                    Agregar nota
                </button>
            </form>
            <Notas notas={notas} borrarNota={borrarNota} />
        </div>
    );
};
