import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header'
import SavedNews from './SavedNews';
import NewsDashboard from './NewsDashboard';
import Modal from './Modal';

function Home() {

  const showSaved = useSelector(state => state.saved);
  const history = useHistory();

  if(JSON.parse(localStorage.getItem('user'))){
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
