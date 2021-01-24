import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/news/action';
import NewsCard from './NewsCard'

function NewsDashboard() {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const [heading, setHeading] = useState('');

    const fetchTopNews = useCallback((url, op) => {
        dispatch(fetchNews(url, op))
    }, [dispatch])

    useEffect(() => {
        if(data.endPoint.url === undefined){
            fetchTopNews('top-news', false)
        }
    }, [fetchTopNews, data.endPoint])

    const setTitle = useCallback(() => {
        let text;
        let d = data.endPoint.url;
        let search = /^search/.test(d)  
        let topic = /^topics/.test(d);
        let top = /^top-news/.test(d);

        if (data.topic || topic) text = data.topic;
        if (data.searchResult || search) text = 'Search Results';
        if (data.topNews && top) text = data.topNews;
        setHeading(text);
    }, [data])

    useEffect(() => {
        setTitle();  
    }, [data, setTitle])

    return (
    <>
    <main className="mx-auto mt-2 mb-4 mb-sm-5">
        <div className="row">
        <div className="col-12 col-lg-9 mx-auto">
            {
                data.loading ?
                <div className="text-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>                
                :
                data.error ?
                <h2 className="text-center">{data.error}</h2>
                :
                data.news ?
                <>
                { heading ? <h2 className="text-capitalize m-sm-3 text-center text-sm-left">{heading}</h2> : '' }
                {
                    data.news.map((n, index) => {
                        return <NewsCard key={index} values={n} />
                    })
                }
                </>
                :
                <h2 className="text-center">Server not responding.</h2>
            }
        </div>
        </div>
    </main>
    <div className="water-mark text-center text-sm-right p-1 p-sm-2 shadow">Made with <span role="img" aria-label="img">❤️</span> by Sanam Kapoor
    </div>
    </>
    )
}

export default NewsDashboard
