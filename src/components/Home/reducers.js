import { ROUTE_ADD, ROUTE_REMOVE } from './actions';

export default function routes(state = [], action) {
    switch (action.type) {
        case ROUTE_ADD:
            return state.concat([action.route]);
        case ROUTE_REMOVE:
            return state.filter((route, index) => index !== action.id);
        default:
            return state;
    }
}