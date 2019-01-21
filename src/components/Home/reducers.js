import { ROUTE_ADD, ROUTE_REMOVE, ROUTE_GET } from './actions';
import { saveStateToLocalStorage, syncStateWithLocalStorage } from '../../services/LocalStorage';

export default function routes(state = [], action) {
    switch (action.type) {
        case ROUTE_ADD:
            const routeAdd = state.concat([action.route]);
            saveStateToLocalStorage({ routes: routeAdd })
            return routeAdd;
        case ROUTE_REMOVE:
            const routeRemove = state.filter((route, index) => index !== action.id);
            saveStateToLocalStorage({ routes: routeRemove });
            return routeRemove;
        case ROUTE_GET:
            return syncStateWithLocalStorage('routes');
        default:
            return state;
    }
}