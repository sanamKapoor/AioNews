import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { showSavedNews } from '../redux/news/action';
import NewsCard from './NewsCard';

function SavedNews() {

    const [news, setNews] = useState([]);
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const fetchSavedNews = useCallback(() => {
        const users = JSON.parse(localStorage.getItem('aio_users'));
        const currentUser = JSON.parse(localStorage.getItem('aio_user'));
        let realUser = getRealUser(users, currentUser);

        if(realUser){
            setError('');
            const savedNews = realUser.savedNews;
            if(savedNews){
                setNews(savedNews);
            }
        } else {
            setError('Please reload the page.')
        }
    }, [])

    useEffect(() => {
        fetchSavedNews()
    }, [fetchSavedNews])

    const getRealUser = (allUsers, currentUser) => {
        let realUser;
        
        if(allUsers.length > 0 && currentUser){
          allUsers.filter(user => {
            if(user.email === currentUser.email && user.password === currentUser.password){
              realUser = user
            }
            return null;
          })
        }

        if(realUser){
            return realUser;
          } else {
            return null;
          }
      }

    const deleteNews = title => {
        setNews(news.filter(n => n.title !== title))
    }

    if(error) {
        return <h2 className="text-center mt-2">{error}</h2>
    } else {
       return (
        <section className="mx-auto mt-2 mt-sm-3 mt-md-4 mb-4 mb-sm-5">
        <span onClick={() => dispatch(showSavedNews(false))} className="text-primary back-btn m-2">
            <i className="fas fa-arrow-left"></i>
        </span>
        <div className="row no-gutters">
            {
                news.length > 0 ?
                news.map((n, index) => {
                    return(
                        <div className="col-12 col-xl-6" key={index}>
                            <NewsCard values={n} saved={true} deleteNews={deleteNews} />
                        </div>
                    )
                })
                :
                <div className="col-12 text-center">
                    <h2 className="text-muted mt-2">You don't have any saved news.</h2>
                </div>
            }
        </div>
        <div className="water-mark position-fixed text-center text-sm-right p-1 p-sm-2 shadow">Made with <span role="img" aria-label="img">❤️</span> by Sanam Kapoor
        </div>
        </section>
        )
    }
}

export default SavedNews
