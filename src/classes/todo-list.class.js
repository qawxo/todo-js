import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // Inicializamos el array vacio
        //this.todos = [];
        this.cargarLocalStorage();
    }

    // metodo para insertar 
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    elimiarTodo(id){
      this.todos =  this.todos.filter(todo => todo.id != id); // filtra el elemento que tenga el id que coincide con el argumento
      this.guardarLocalStorage();
    }

    marcarCompletado(id){
        // hacemos un recorrido al arreglo
        for(const todo of this.todos){
            // comparamos el id con el parametro que recibimos
            if (todo.id == id) {
                // el estado de todo pasa a ser completado 
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break; // salimos de la condicion
            }
        }

    }

    eliminarCompletados(){
        // necesito todas las tareas que no estan completados
        this.todos =  this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );
        // transforma el todos en un JSON

    }

    cargarLocalStorage(){
        
        this.todos = (localStorage.getItem('todo'))
                   ?  JSON.parse(localStorage.getItem('todo'))
                   : [];
        
        this.todos = this.todos.map(obj => Todo.fromJSON(obj));

    }
}


