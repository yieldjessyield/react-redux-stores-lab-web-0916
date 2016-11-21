export default function createStore(reducer){

  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const dispatch = (action) => {
   state = reducer(state, action)
   // state =  countReducer(state=0, action)
   listeners.forEach( listener => listener() )
  }

  dispatch({})

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
    }

}
