import { GLOBALTYPES } from "./../actions/GlobalType";
const inistialState = {
  Loading: null,
};

const alertReducer = (state = inistialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.LOADING_ON:
      return {
        ...state,
        Loading: true,
      };
    case GLOBALTYPES.LOADING_OFF:
      return {
        ...state,
        Loading: false,
      };
    default:
      return state;
  }
};
export default alertReducer;
