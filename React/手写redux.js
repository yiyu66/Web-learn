// 手写Redux
// 1. createStore

function createStore(reducer) {
  let state;
  let listeners = [];
  let subscribe = (listener) => listeners.push(listener);
  let getState = () => state;
  let dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  dispatch({});
  return { getState, dispatch, subscribe };
}

// 2. combineReducers
function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChanged = false;
    for (let key in reducers) {
      nextState[key] = reducers[key](state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    }
    hasChanged =
      hasChanged || Object.keys(nextState).length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// 3. applyMiddleware
function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    let store = createStore(reducer);
    let dispatch;
    let middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };
    let chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}
