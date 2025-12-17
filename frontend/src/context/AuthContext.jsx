import React, {createContext } from 'react'


export const authDataContext = createContext();

const AuthContext = ({children}) => {
 
    let serverUrl = "https://airbnb-clone-jxp1.onrender.com"
     let value={
            serverUrl
        }

  return (
    <div>
        <authDataContext.Provider value={value} >
            {children}
        </authDataContext.Provider>

    </div>
  )
}

export default AuthContext
