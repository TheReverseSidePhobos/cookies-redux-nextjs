export const initialState = {
  txt: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK':
      return {
        ...state,
        txt: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
