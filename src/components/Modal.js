import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { topics, languages, countries } from './Data';
import { useState, useEffect } from 'react';
import { language, fetchNews, country, newsTopic } from '../redux/news/action';

function Modal() {

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const [modalData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData([]);
    UI();
  }, [data.setModalData, data.country, data.language, data.topic])

  const UI = () => {
    if(data.setModalData === 'topics'){
       setDisplayData(
         topics.map((topic, index) => {
           return (
            <button
              key={index} 
              onClick={() => {
                dispatch(newsTopic(topic))
                dispatch(fetchNews(`topics/${topic}`, data.language, data.country, false))
              }} 
              className={`col m-1 text-capitalize btn ${data.topic === topic ? 'btn-primary' : 'btn-outline-primary'}`}>
              {topic}</button>
           )
         })
         )
    } else if (data.setModalData === 'languages') {
       setDisplayData(
         languages.map(lang => {
           return(
            <button 
              key={lang.value}
              onClick={() => dispatch(language(lang.value))}
              className={`col m-1 btn ${data.language === lang.value ? 'btn-primary' : 'btn-outline-primary'}`}>
              {lang.name}</button>
           )
         })
         )
    } else if (data.setModalData === 'countries'){
        setDisplayData(
          countries.map(count => {
            return (
              <button 
                key={count.value}
                onClick={() => dispatch(country(count.value))}
                className={`col m-1 btn ${data.country === count.value ? 'btn-primary' : 'btn-outline-primary'}`}>
                {count.name}</button>
            )
          })
          )
    } else {
        setDisplayData([])
    }
  }

    return (
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title text-capitalize" id="exampleModalLabel">{data.setModalData}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="row mx-2">
        {
          modalData
        }
      </div> 
      </div>
    </div>
  </div>
</div>

    )
}

export default Modal
