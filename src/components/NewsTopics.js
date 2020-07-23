import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, newsTopic } from '../redux/news/action';
import { topics } from './Data';

function NewsTopics() {

    const data = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="d-none d-lg-flex row mx-auto mt-3 text-light">
            {
                topics.map((t, index) => {
                    return(
                    <div key={index} 
                    onClick={() =>  {
                        dispatch(newsTopic(t))
                        dispatch(fetchNews(`topics/${t}`, data.language, data.country, false))
                    }} 
                    className={`col-2 p text-capitalize switch-btn ${data.topic === t ? 'text-muted' : ''}`}>
                    {t}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default NewsTopics
