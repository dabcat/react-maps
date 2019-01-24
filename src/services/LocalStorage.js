export default function LocalStorageService(state) {
    function read(state) {
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

    function save(state) {
        for (let key in state) {
            localStorage.setItem(key, JSON.stringify(state[key]));
        }
    }

    return {
        read,
        save
    }
}

