import { useDispatch } from "react-redux"
import { useState } from "react";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {

    const [text , setText] = useState("") ;
    const dispatch = useDispatch() ;

    const onFormSubmit = (e) => {
        e.preventDefault() ;
        //console.log(text) ;
        dispatch(addNewTodo(text)) ;
        setText('') ;
    }

    const onInputChange = (e) => {
        //console.log(e.target.value) ;
        setText(e.target.value) ;
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            
        </form>
    )
}

export default TodoForm ;