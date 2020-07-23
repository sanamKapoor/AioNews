import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { language, country } from '../redux/news/action';
import { languages, countries } from './Data';

function LanguageAndCountires() {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    
    const LanguagesList = languages.map((l, index) => {
        return(
            <li 
             key={index} 
             onClick={() => dispatch(language(l.value))} 
             className={`list-group-item switch-btn ${data.language === l.value ? 'text-primary' : 'text-dark'}`}>
            {l.name}</li>
        )
    })

    const CountiresList = countries.map((c, index) => {
        return(
            <li 
             key={index} 
             onClick={() => dispatch(country(c.value))} 
             className={`list-group-item switch-btn ${data.country === c.value ? 'text-primary' : 'text-dark'}`}>
            {c.name}</li>
        )
    })


    return (
    <div className="d-none d-lg-block col-lg-4">
      <ul className="list-group mt-3 text-center">
        <li className="list-group-item active">Languages</li>
        {
            LanguagesList
        }
      </ul>

      <ul className="list-group mt-5 text-center">
        <li className="list-group-item active">Countries</li>
        {
            CountiresList
        }
      </ul>
    </div>
    )
}

export default LanguageAndCountires
