import { ROUTE_ADD, ROUTE_REMOVE, ROUTE_GET } from './actions';
import LocalStorageService from '../../services/LocalStorage';

const LocalStorage = LocalStorageService();

export default function routes(state = [], action) {
    switch (action.type) {
        case ROUTE_ADD:
            const routeAdd = state.concat([action.route]);
            LocalStorage.save({ routes: routeAdd })
            return routeAdd;
        case ROUTE_REMOVE:
            const routeRemove = state.filter((route, index) => index !== action.id);
            LocalStorage.save({ routes: routeRemove });
            return routeRemove;
        case ROUTE_GET:
            return LocalStorage.read('routes');
        default:
            return state;
    }
}