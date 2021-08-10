export const MAIN_INITIAL_STATE = {
  mainList: [],
};

export default (state = MAIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'main/LIST':
      return {
        ...state,
        mainList: action.payload,
      };
    default:
      return state;
  }
};
