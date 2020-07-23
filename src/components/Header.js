import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NewsTopics from './NewsTopics'
import AllOptions from './AllOptions'
import { useDispatch, useSelector } from 'react-redux';
import { showSavedNews, fetchNews, newsTopic, endPoint, searchTopics } from '../redux/news/action';

function Header() {

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(showSavedNews(false))
  }, [])

  const handleSearch = e => {
    if(e.key === 'Enter'){
      dispatch(newsTopic(''))
      dispatch(searchTopics())
      dispatch(fetchNews(`search?q=${search}`, data.language, data.country, true))      
      setSearch('')
    }
  }

    return (
      <nav className="navbar bg-primary px-2 px-md-5">
    <div className="row mx-auto">
    <a href="/home" className="col-md-3 col-3 text-light navbar-brand font-weight-bold">
      AIONEWS
    </a>
    {
      !data.saved ?
      <input
        value={search} 
        onChange={e => setSearch(e.target.value)}
        onKeyPress={e => handleSearch(e)}
        className="col-md-5 col-12 mx-auto mt-3 mt-md-0 order-md-2 order-3 form-control" type="search" 
        placeholder="Search" 
      />
      : 
      <div className="col-md-5 col-12 mx-auto mt-3 mt-md-0 order-md-2 order-3"></div>
    }
    <div className="col-md-3 col-7 order-md-3 order-2 align-self-center text-right text-md-center">
    <div className="btn-group">
      <button className="btn btn-outline-light btn-sm dropdown-toggle px-3 py-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="far fa-user fa-2x pr-2"></i>
      </button>
      <div className="dropdown-menu text-center">
        <span className="dropdown-item save" onClick={() => dispatch(showSavedNews(true))}>Save News</span>
        <Link to="/" onClick={() => {
          localStorage.removeItem('user')
          dispatch(newsTopic(''))
          dispatch(endPoint({}))
        }} className="btn btn-secondary btn-sm my-2">Logout</Link>
      </div>
    </div>
  </div>
  </div>

    {
      !data.saved ?
      <>
        <NewsTopics />
        <AllOptions />
      </>
      : ''
    }
  
</nav>
    )
}

export default Header
