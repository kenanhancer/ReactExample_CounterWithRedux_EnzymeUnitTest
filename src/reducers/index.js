export default (state = 0, action) => {
  let newState = state;

  switch (action.type) {
    case "INCREMENT":
      newState = state + 1;
      break;
    case "DECREMENT":
      newState = state - 1;
      break;
  }

  console.log(
    "reducer => prevState:",
    state,
    " newState:",
    newState,
    " action:",
    action
  );
  return newState;
};
