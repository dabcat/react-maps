export const ROUTE_ADD = 'ROUTE_ADD';
export const ROUTE_REMOVE = 'ROUTE_REMOVE';

export function actionAddRoute(route) {
    return {
        type: ROUTE_ADD,
        route
    }
}

export function actionRemoveRoute(id) {
    return {
        type: ROUTE_REMOVE,
        id
    }
}