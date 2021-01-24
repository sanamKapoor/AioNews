import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Error() {

  useEffect(() => {
    localStorage.removeItem('user');
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
      <div style={{ borderRadius: '8px'}} className="bg-light p-3 border shadow text-primary text-center mx-3">
        <h2 className="font-weight-bold">Page not Found (Error 404)</h2>
        <Link className="btn btn-sm btn-secondary mt-1 mt-sm-2" to={`https://sanamkapoor.github.io/${process.env.REACT_APP_DOMAIN}/`} >Login</Link>
      </div>
    </div>
  )
}

export default Error
