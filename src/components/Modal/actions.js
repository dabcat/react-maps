export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export function actionOpenModal(modalData) {
    return {
        type: MODAL_OPEN,
        open: true,
        modalData
    }
}

export function actionCloseModal() {
    return {
        type: MODAL_CLOSE,
        open: false,
    }
}