import'./styles.css';

// Busca automaticamente el index.js de la carpeta classes
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

// Inicializamos la clase

export const todoList = new TodoList();

// reconstruimos el HTML con todos guardados en el locaStorage

todoList.todos.forEach( crearTodoHtml);

/*const tarea  = new Todo('Aprender JavaScript');

// Agregamos la tarea al arreglo
todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);*/

localStorage.setItem('mi-key','ABC123');

// borra el local storage en 1,5 segundos
/*setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500);*/
