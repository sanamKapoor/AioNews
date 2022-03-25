import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, newsTopic } from '../redux/news/action';
import { topics } from './data/Topics';

function NewsTopics() {

    const dispatch = useDispatch();
    const data = useSelector(state => state);

    return (
        <div className="d-none d-sm-flex justify-content-around mt-2 mt-sm-3 text-light w-100 mx-auto mx-sm-4">
            {
                topics.map((t, index) => {
                    return(
                    <div key={index} 
                    onClick={() =>  {
                        dispatch(newsTopic(t))
                        dispatch(fetchNews(`topics/${t}`, false))
                    }} 
                    className={`mx-1 p text-capitalize switch-btn card-text ${data.topic === t ? 'text-dark' : ''}`}>
                    {t}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default NewsTopics
