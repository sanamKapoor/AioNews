import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { topics } from './data/Topics';
import { fetchNews, newsTopic } from '../redux/news/action';

function Modal() {

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const [modalData, setDisplayData] = useState([]);

  const UI = useCallback(() => {
    if(data.setModalData === 'topics'){
       setDisplayData(
         topics.map((topic, index) => {
           return (
            <button
              key={index} 
              onClick={() => {
                dispatch(newsTopic(topic))
                dispatch(fetchNews(`topics/${topic}`, false))
              }} 
              className={`col m-1 text-capitalize btn ${data.topic === topic ? 'btn-primary' : 'btn-outline-primary'}`}>
              {topic}</button>
           )
         })
         )
    } else {
        setDisplayData([])
    }
  }, [data, dispatch])

  useEffect(() => {
    setDisplayData([]);
    UI();
  }, [data.setModalData, data.topic, UI])

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
      <div className="row mx-0 mx-sm-2">
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
