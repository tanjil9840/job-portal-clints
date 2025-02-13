import React, { Children, useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location)
     
    if(loading){ <span className="loading loading-spinner loading-xl"></span>  }
    if(user){
        return children 
    }
    return <Navigate to='/signIn' state={location?.pathname} > </Navigate>
};

export default PrivateRoute;