import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );


//Para trabajar con local storage (guarda info a pesar de un reincio)

//localStorage.setItem('mi-key','ABC1234');
//sessionStorage.setItem('mi-key','ABC1234');

//Set timeout para setear en x cantidad de tiempo realizar una accion
//Por ejemplo borrar lo almacenado en setItem
//setTimeout(() => {

//    localStorage.removeItem('mi-key');
//}, 1500);