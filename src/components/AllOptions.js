import React from 'react';
import { useDispatch } from 'react-redux';
import { modalData } from '../redux/news/action';

function AllOptions() {

    const dispatch = useDispatch();

    return (
    <div className="d-flex d-lg-none row mx-auto mt-3">
        <button 
            onClick={() => dispatch(modalData('topics'))}
            className="btn btn-sm btn-light col mx-2 text-center" 
            data-toggle="modal" 
            data-target="#exampleModal">
        Topics</button>

        <button 
            onClick={() => dispatch(modalData('languages'))}
            className="btn btn-sm btn-light col mx-2 text-center" 
            data-toggle="modal" 
            data-target="#exampleModal">
        Languages</button>

        <button 
            onClick={() => dispatch(modalData('countries'))}
            className="btn btn-sm btn-light col mx-2 text-center" 
            data-toggle="modal" 
            data-target="#exampleModal">
        Countries</button>
    </div>
    )
}

export default AllOptions
