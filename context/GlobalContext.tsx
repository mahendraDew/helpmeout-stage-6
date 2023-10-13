import React, { createContext, useState, useEffect } from 'react'
import {onAuthStateChanged, User} from 'firebase/auth'
import { ContextTypes } from '@/types/video-repo'
import {auth} from '../components/Auth/firebase'

export const GlobalContext = createContext({
    logged: false ,
    setLogged: () => { },
    user: '',
    setUser: () => { }
} as ContextTypes)

const GlobalState = ({ children }: { children: React.ReactNode }) => {
    const [logged, setLogged]= useState<boolean>(false)
    const [user, setUser]= useState<string>('')


    useEffect(() => {
        localStorage.setItem("logged", logged.toString())
    }, [])

    useEffect(() => {
        localStorage.setItem("user", user)
    }, [])

    const contextValue:ContextTypes = {
        logged,
        setLogged,
        user,
        setUser
    }
  return (
    <GlobalContext.Provider value={contextValue}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState