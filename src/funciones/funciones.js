/*Aqui creamos nuestras funciones para hacer peticiones a la APi. Después, las llamaremos desde los comp. */
import axios from 'axios'

/* Funcion para mostrar todos los personajes */
const todosPersonajes = async(page, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    state(peticion.data.results) /*Mete en el state(UseState de SetPersonajes lo que hay en peticion.data) */
}

/* Funcion para mostrar todos los personajes */
const unicoPersonaje = async(id , state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data) /*Mete en el state(UseState de SetPersonaje lo que hay en peticion.data) */
}

export { todosPersonajes , unicoPersonaje }