import { createStore, applyMiddleware, Store } from 'redux';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { AnyAction } from 'redux';
// import rootReducer from './reducers';
import rootReducer from '../reducers';

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Create the makeStore function
const makeStore: MakeStore<Store<RootState, AnyAction>> = (context: Context) =>
  createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Create the wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: false });
