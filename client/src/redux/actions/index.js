import axios from 'axios'
import { ADDNEW_TODO , GETALL_TODO , TOGGLE_TODO , UPDATE_TODO , DELETE_TODO , TOGGLE_TAB} from './type' ;

const API_URL = 'http://localhost:8000' ;

// const API_URL = 'https://new-to-do-backend.vercel.app/' ;

// yahan pe api call asynchronous hai 

export const addNewTodo = (data) => async (dispatch) => {
    try{
       const res = await axios.post('http://localhost:8000/todos' , {data}) ;
        // res mein ky a raha hai usko print karna hai 
        // console.log(res) ;

       dispatch({type:ADDNEW_TODO , payload:res.data}) ;
    }
    catch(error){
        console.log('Error while calling addNewTodo API ' , error.message) ;
    }
  
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}
  

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTodo = (id , data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}` , {data}); // see about put method in axios 

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodos API ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete( `${API_URL}/todos/${id}` );

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodos API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}