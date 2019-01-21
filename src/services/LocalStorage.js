export function syncStateWithLocalStorage(state) {
    if (localStorage.hasOwnProperty(state)) {
        let value = localStorage.getItem(state);
        try {
            value = JSON.parse(value);
            return (value);
        } catch (e) {
            return (value);
        }
    } else {
        return [];
    }
}

export function saveStateToLocalStorage(state) {
    for (let key in state) {
        localStorage.setItem(key, JSON.stringify(state[key]));
    }
}