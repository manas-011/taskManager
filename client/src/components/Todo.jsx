import { toggleTodo , updateTodo , deleteTodo} from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = (props) => { 

    const todo = props.todo ; // {todo} -> inplace of props , it automatically extract the value 

    const [editing , setEditing] = useState(false) ;
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch() ;
    
    const onFormSubmit = (e) => {
      e.preventDefault();

      dispatch(updateTodo(todo._id, text)) ;

      setEditing(prevState => !prevState) ;
    }

    return (
        <li
         className="task"
         onClick={() => dispatch(toggleTodo(todo._id))}

         style={{
            textDecoration: todo.done ? 'line-through' : '',
            color: todo.done ? '#bdc3c7' : '#FF0000'  // color false wala kam nehi kar raha hai thoda re-check again
            }}
        > 
          <span style={{display: editing ? 'none':''}}>{todo.data}</span> 
            
          <form
                style={{ display: editing ? '' : 'none' }}
                onSubmit={onFormSubmit}
          >
                <input
                    type="text"
                    value={text} // why we use state here 
                    className="edit-todo" 
                    onChange={(e) => setText(e.target.value)} 
                />
                
          </form>

          <span className="icon" onClick={ () => dispatch(deleteTodo(todo._id))}>
            <i className="fas fa-trash" />
          </span>

          <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
            <i className="fas fa-pen" />
          </span>
          

        </li>
        
    )
}

export default Todo ;