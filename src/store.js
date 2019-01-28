import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware'

const composerEnhancers = composeWithDevTools({
    name: `Redux`,
    realtime: true,
    trace: true
});

export const store = createStore(reducer, composerEnhancers(middleware));