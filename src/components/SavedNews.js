import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import { useDispatch } from 'react-redux';
import { showSavedNews } from '../redux/news/action';

function SavedNews() {

    const [news, setNews] = useState([]);
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = JSON.parse(localStorage.getItem('user'));
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

    const getRealUser = (allUsers, currentUser) => {
        let realUser;
        
        if(allUsers.length > 0 && currentUser){
          allUsers.filter(user => {
            if(user.email === currentUser.email && user.password === currentUser.password){
              realUser = user
            }
          })
        }

        if(realUser){
            return realUser;
          } else {
            return null;
          }
      }

    if(error) {
        return <h2 className="text-center">{error}</h2>
    } else {
       return (
        <section className="mx-auto my-3 my-md-4">
        <button onClick={() => dispatch(showSavedNews(false))} className="btn btn-secondary m-2">Go Back</button>
        <div className="row no-gutters">
            {
                news.length > 0 ?
                news.map((n, index) => {
                    return(
                        <div className="col-12 col-lg-6" key={index}>
                            <NewsCard values={n} saved={true} />
                        </div>
                    )
                })
                :
                <div className="col-12 text-center">
                    <h4 className="text-muted">You don't have any saved news.</h4>
                </div>
            }
        </div>
        </section>
        )
    }
}

export default SavedNews
