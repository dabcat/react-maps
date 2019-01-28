import React from 'react'
import { connect } from 'react-redux'
import { actionCloseModal } from './actions';
import './Modal.scss';

const mapStateToProps = state => ({
    ...state.modal
})

const mapDispatchToProps = dispatch => ({
    actionCloseModal: () => dispatch(actionCloseModal())
})

const AlertModal = ({ data, open, actionCloseModal }) => {
    if (open) {
        return (
            <div className="Modal">
                <div className="Modal__head">
                    <h5
                        className="modal-title"
                    >{data.title}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={() => actionCloseModal()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="Modal__body">
                    <p>{data.body}</p>
                </div>
                <div className="Modal__footer">
                    {data.footer}
                    <button type="button" className="btn btn-secondary" onClick={() => actionCloseModal()}>close</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);