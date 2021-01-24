import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header'
import SavedNews from './SavedNews';
import NewsDashboard from './NewsDashboard';
import Modal from './Modal';

function Home() {

  const { state } = useLocation(); 
  let history = useHistory();

  const showSaved = useSelector(state => state.saved);

  useEffect(() => {
    if(state){
      let userData = {
        email: state.user.email,
        password: state.user.password
      }
      localStorage.setItem('user', JSON.stringify(userData))
    }
  }, [state])

  if(state || JSON.parse(localStorage.getItem('user'))){
    return (
        <>
          <Header />
          {
            (showSaved && JSON.parse(localStorage.getItem('user'))) ?
            <SavedNews />
            :
            <NewsDashboard />
          }
          <Modal />
        </>
    )
    } else {
      history.push('/');
      return ''
    }
}

export default Home
