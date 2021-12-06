const initialState = {
  todos: [
    {
      id: 0,
			todos: "Buy",
			done:false
    },
  ],
  value: "",
};

const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
		case "ADD_TASK":
			if (action.value === '') {
				console.log('EMPTY')
			} else {
				const newTask = { id: state.todos.length + 1, todos: action.value };
				return { ...state, todos: [...state.todos, newTask] };
			}
		case "CHANGE_NAME":
      return {
        ...state,
        value: action.value,
			}
		case "REMOVE_TASK":
			const newState = state.todos.filter((item)=>item.id !== action.value)
			return {
				
		...state,
				todos: newState
			}
		case "CLEAR_INPUT":
			return {
				...state,
				value:''
			}
		case "TODO_DONE":
			return {
				...state,
				done:action.value,
			}
 
		default:
			return state;
			
  }
};

export default reducerTodo;
