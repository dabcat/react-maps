import { store } from '../store';
import { actionOpenModal } from '../components/Modal/actions';

export function ErrorHandler(error) {
    // throw new Error(error);
    console.error(error)
    store.dispatch(actionOpenModal({
        title: 'YAY!',
        body: "<p>Hey I'm body!</p>",
        footer: "footer"
    }))
}