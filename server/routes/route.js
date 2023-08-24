import express from 'express' 
import {addTodo , getAllTodos , toggleTodoDone , updateTodo , deleteTodo} from '../controller/todo-controller.js';

const route = express.Router() ;


route.post('/todos' , addTodo) ;
route.get('/todos' , getAllTodos) ;
route.get('/todos/:id' , toggleTodoDone) ;
route.put('/todos/:id' , updateTodo) ; // see about different routing such as put , delete 
route.delete('/todos/:id' , deleteTodo) ;

export default route ;
