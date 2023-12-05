import { useState, useEffect } from "react";
import { todosPersonajes } from "../funciones/funciones";
import React from "react";
import "../hoja-de-estilos/inicio.css";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(
      1,
      setPersonajes
    ); /* setPersonaje se pasa por parametro (state) */
  }, []);

  return (
    <>
      <div className="lista">
        <h1 className="titulo-prin">Lista de personajes:</h1>
        {personajes != null
          ? personajes.map((personaje) => (
              <div key={personaje.id}>
                <a className="enlace" href={`/personaje/${personaje.id}`}>
                  {personaje.name}
                </a>{" "}
                {/* Le estamos diciendo que el valor de <a> es la direcc /personaje/id */}
              </div>
            ))
          : "No hay personajes"}
      </div>
    </>
  );
};

export default Inicio;
