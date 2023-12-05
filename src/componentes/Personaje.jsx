import React from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";
import { useEffect, useState } from "react";
import "../hoja-de-estilos/personaje.css";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);
  const params =
    useParams(); /* En params tenemos el id dinamico que hemos creado anteriormente en Inicio.jsx en el <a href> */

  useEffect(() => {
    unicoPersonaje(
      params.id,
      setPersonaje
    ); /* setPersonaje se pasa por parametro (state) */
  }, []);

  return (
    <>
      {personaje != null ? (
        <div className="carta">
          <div className="contenedor-imagen">
          <img  className="imagen" src={personaje.image} />
          </div>
          <div className="contenedor-texto">
          <h1 className="titulo">{personaje.name}</h1>
          <p className="subtitulo">*Personaje Número: {params.id}*</p>
          <ul>
            <li>
              <strong>
                Especie:{" "}
                <span
                  style={
                    personaje.status == "Alive"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {personaje.status}
                </span>{" "}
                - {personaje.species}
              </strong>
              <br />
            </li>
            <li>
              <strong>
                Género:{" "}
                <span
                  style={
                    personaje.gender == "Female"
                      ? { color: "pink" }
                      : { color: "blue" }
                  }
                >
                  {personaje.gender}
                </span>
              </strong>
              <br />
            </li>
            <li>
              Su ubicación: {personaje.location.name}
              <br></br>
            </li>
            <li>Episodios en los que aparece: {personaje.episode.length}</li>
          </ul>
          </div>
        </div>
      ) : (
        "No hay personaje"
      )}
    </>
  );
};

export default Personaje;
