// Tiny Redux application


// Reducer 
const reducer = (state = [], action) => {
    if(action.type === 'split_string') {
   return action.payload.split('');
 }
    else if (action.type === 'add_character') {
     return [...state, action.payload];
 }
 
 return state;
};

// Create a store
const store = Redux.createStore(reducer);

store.getState();


// Action, is a plain javascript object
const action = { 
 type: 'split_string', 
 payload: 'asdf' // the piece of data we want to work on, manipulate on
};

store.dispatch(action);

store.getState();

const action2 = {
 type: 'add_character',
 payload: 'a'
};

store.dispatch(action2);
store.getState();