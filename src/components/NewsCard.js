import React, { useState, useEffect } from 'react';
import img from './img/earth.png';

function NewsCard({ values, saved, deleteNews }) {

  const [isSave, saveOnce] = useState(false);
  const [error, setError] = useState('');
  const [showErr, setShowErr] = useState(false);

  useEffect(() => {
    setShowErr(false);
    const users = JSON.parse(localStorage.getItem('aio_users'));
    let realUser = getRealUser(users);

    if(!realUser && !showErr){
      setError('Please reload the page.')
      setShowErr(true);
    } else {
      setError('');
      if(realUser.savedNews){
        realUser.savedNews.map(news => {
          if(news.title === values.title){
            saveOnce(true);
          }
          return null;
        })
      }
    }
    
  }, [values.title, showErr])

  const getRealUser = (allUsers) => {
    let realUser;
    const currentUser = JSON.parse(localStorage.getItem('aio_user'));

    if(allUsers.length > 0 && currentUser){
      allUsers.map(user => {
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

  const saveNews = news => {

    if(!isSave){
    const users = JSON.parse(localStorage.getItem('aio_users'));

    let realUser = getRealUser(users);
    let storedNews = realUser.savedNews;

    if(storedNews){
      storedNews.push(news);
    } else {
      alert('Can not save News.')
    }

    localStorage.setItem('aio_users', JSON.stringify(users));
    
     saveOnce(true);
    }
  }

  const unsaveNews = news => {
      const users = JSON.parse(localStorage.getItem('aio_users'));
  
      let realUser = getRealUser(users);
      let storedNews = realUser.savedNews;
  
      if(storedNews){
        storedNews.map(n => {
          if(n.title === news.title){
            deleteNews(news.title)
            let index = storedNews.indexOf(n)
            storedNews.splice(index, 1);
          }
          return null;
        })
      } else {
        alert('Can not remove saved News.')
      }
  
      localStorage.setItem('aio_users', JSON.stringify(users));
      
       saveOnce(false);
  }

  const handleSave = (news) => {
    saved ? unsaveNews(news) : saveNews(news)
  }

  if(values && !error){
    const image = (values.image === null || values.image === '' || values.image === undefined) ? img : values.image;
    return (
        <div className="row no-gutters border mx-0 my-2 mx-sm-2 p-1 p-md-2 rounded">
        <div className="col-12 col-sm-4 align-self-center">
          <img src={image} className="card-img" alt="img" />
        </div>
        <div className="col-12 col-sm-8">
          <div className="card-body p-2 p-sm-4 align-self-center">
          <h5 className="card-title">{values.title}</h5>
          <p className="card-text">{values.description}</p>
            <div className="row text-muted">
              <em className="col-12 col-sm-6">
              Published At : {new Date(values.publishedAt).toLocaleDateString()}
              </em>
              <em className="col-12 col-sm-6 text-capitalize">
                Source : {values.source.name}
              </em>
            </div>
            <div className="row text-muted my-2 my-sm-3">
              <div className="col-12 col-sm-6">
                <a href={values.url} target="_blank" className="btn btn-primary btn-block btn-sm my-1 my-sm-0" rel="noopener noreferrer">View</a>
              </div>
              <div className="col-12 col-sm-6">
                <button onClick={() => handleSave(values)} className="btn btn-secondary btn-block btn-sm my-1 my-sm-0">
                  { saved ? 'Remove' : isSave ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else if(error && showErr) {
    return ''
  } else {
    return ''
  }
}

export default NewsCard
