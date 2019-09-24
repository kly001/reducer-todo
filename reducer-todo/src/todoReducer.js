export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";


export const initialState = {
    todos: [
      {
        name: "Fly a Plane",
        completed: false,
        id: 1,
      },
      {
        name: "Move a Mountain",
        completed: false,
        id: 2
      }
    ]
  }
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case ADD_TODO:
        const newTodo = {
          name: action.payload,
          purchased: false,
          id: Date.now(),
        };
        return {
          ...state,
          todos: [...state.todos, newTodo]
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (action.payload === todo.id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          })
        };
      case CLEAR_COMPLETED:
        return {
          ...state,
          groceries: state.groceries.filter(todo => !todo.purchased)
        };
      default:
        return state;
    }
  };
  