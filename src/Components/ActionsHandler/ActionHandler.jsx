// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {
  task: [],
};

export const ActionHandler = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, task: [...state.task, action.payload] };
    case "delete":
      console.log("deleted");
      return {
        ...state,
        task: state.task.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
