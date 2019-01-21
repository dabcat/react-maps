export const ROUTE_ADD = 'ROUTE_ADD';
export const ROUTE_REMOVE = 'ROUTE_REMOVE';
export const ROUTE_GET = 'ROUTE_GET';

export function actionAddRoute(route) {
    return {
        type: ROUTE_ADD,
        route
    }
}

export function actionGetRoute() {
    return {
        type: ROUTE_GET,
    }
}

export function actionRemoveRoute(id) {
    return {
        type: ROUTE_REMOVE,
        id
    }
}