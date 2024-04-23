// reducers.js
import { combineReducers } from 'redux';


const initialState = {
    drawer: false 
}
const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'openclose':
      return {drawer: !state.drawer};
    default:
      return state;
  }
};

const rowsReducer = (state = [], action) => {
  console.log("reducers: ", action.payload);
  switch (action.type) {
    case 'SET_ROWS':
      return action.payload;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  isDrawerOpen: stateReducer,
  rows: rowsReducer
});


export default rootReducer;
