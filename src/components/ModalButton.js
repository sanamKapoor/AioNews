import React from 'react';
import { useDispatch } from 'react-redux';
import { modalData } from '../redux/news/action';

function ModalButton() {

    const dispatch = useDispatch();

    return (
    <div className="d-flex d-sm-none row mt-2 mx-auto">
        <button 
            onClick={() => dispatch(modalData('topics'))}
            className="btn btn-sm btn-light col-11 mx-auto text-center" 
            data-toggle="modal" 
            data-target="#exampleModal">
        Topics</button>
    </div>
    )
}

export default ModalButton
