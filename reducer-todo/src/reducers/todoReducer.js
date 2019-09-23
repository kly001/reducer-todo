export const initialState = {
    todo: "Fly a Plane",
    completed: false,
    id:00001,
  };
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
          return {
            ...state,
            item: action.payload,
            id: Date.now()
          };
        
      case "TOGGLE_TODO":
        return {
          ...state,
          completed: !state.completed
        };
      case "DELETE_COMPLETED":
        return {
          ...state,
          item: "",
          completed: !state.completed
        };
      default:
        return state;
    }
  };
  