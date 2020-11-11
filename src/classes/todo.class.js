
export class Todo{

    // metodo para recibir instancias del objeto

    // desestruracion de objetos
    static fromJSON({id,tarea,completado,creado}){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo; // retornamos la instancia
    }
    constructor(tarea){

        this.tarea = tarea

        // recibimos la tarea y automaticamente se crea

        this.id = new Date().getTime(); // recibimos la hora , minutos,segundos y minisegundos
        this.completado = false; // se crea en falso porque recien se crea
        this.creado = new Date(); // fecha de la creacion de la tarea
    }
}