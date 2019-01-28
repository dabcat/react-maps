import { MODAL_OPEN, MODAL_CLOSE } from './actions';

const initialState = {
    open: false
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                open: true,
                data: action.modalData,
            }
        case MODAL_CLOSE:
            return initialState;
        default:
            return state;
    }
}