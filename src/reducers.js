import { combineReducers } from 'redux';

import routes from './components/Home/reducer';
import modal from './components/Modal/reducer';

export default combineReducers({
    routes,
    modal
})