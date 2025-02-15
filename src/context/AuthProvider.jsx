import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees)
  },[])
  
  return (
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider