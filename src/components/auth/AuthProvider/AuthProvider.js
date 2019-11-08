import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import '@firebase/firestore'

export const FirebaseContext = React.createContext(null)
const auth = firebase.auth()
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])
  return <FirebaseContext.Provider value={{ currentUser }}>{children}</FirebaseContext.Provider>
}
