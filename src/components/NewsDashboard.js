import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, topNews } from '../redux/news/action';
import NewsCard from './NewsCard'
import LanguageAndCountires from './LanguageAndCountires'

function NewsDashboard() {

    const data = useSelector(state => state);
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('');

    useEffect(() => {
        dispatch(fetchNews('top-news', data.language, data.country, false))
    }, [])

    useEffect(() => {
        const url = data.endPoint.url === undefined ? 'top-news' : data.endPoint.url;
        const op = data.endPoint.operator === '&' ? true : false; 
        dispatch(topNews())
        dispatch(fetchNews(url, data.language, data.country, op))
    }, [data.language, data.country])

    useEffect(() => {
        setTitle();  
    }, [data])
    
    const setTitle = () => {
        let text;
        let d = data.endPoint.url;
        let search = /^search/.test(d)  
        let topic = /^topics/.test(d);
        let top = /^top-news/.test(d);

        if (data.topic || topic) text = data.topic;
        if (data.searchResult || search) text = 'Search Results';
        if (data.topNews && top) text = data.topNews;
        setHeading(text);
    }

    return (
    <main className="mx-auto my-2 my-md-3">
        <div className="row">
        <div className="col-12 col-lg-8">
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
                { heading ? <h3 className="text-capitalize m-3">{heading}</h3> : '' }
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
            <LanguageAndCountires />
        </div>
    </main>
    )
}

export default NewsDashboard
