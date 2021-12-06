import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux/store";

export const Todo = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.reducerTodo);

	const todos = state.todos.map((item) => (
	 
    <div key={item.id}>
			<ul className='lists'>
				 <li className="list-item_done">  
					<p>{item.todos}</p>
					<button onClick={()=>todoDone(item.id)}>Done</button>
					<button className="remove-btn" onClick={() => removeTask(item.id)}>
						X
					</button>
				</li>		
			</ul>
    </div>
  ));

  const changeInput = (value) => {
    dispatch({type: 'CHANGE_NAME',value});
	};
	
	const addNewTask = () => {
		dispatch({ type: 'ADD_TASK', value: state.value })
		dispatch({ type: 'CLEAR_INPUT' })
		dispatch({type:'INPUT_SPACE',value:state.value})
	}

	const todoDone = () => {

		dispatch({type:'TODO_DONE',value:true})
	}

	const removeTask = (id) => {
		dispatch({type:'REMOVE_TASK',value:id})
	}

	return (
		<div className="container">
			<h1>React Todo</h1>
      <input className="input"
				onChange={(e) => changeInput(e.target.value)}
				value={state.value}
      />
      <button className="add-button" onClick ={()=>addNewTask()}>add</button>
      	{todos}
    </div>
  );
};
