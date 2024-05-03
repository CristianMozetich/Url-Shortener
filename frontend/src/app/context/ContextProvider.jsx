"use client"
import React, { createContext, useState } from "react"
import { jwtDecode } from "jwt-decode"


export const context = createContext()

export default function ContextProvider({ children }) {
    const [userId, setUserId] = useState("")

    const decodeToken = (token) => {
        try{
            const decode = jwtDecode(token)

            return decode
        }catch (error) {
            console.log('Error al decodificar token:', error)
        }
    }

    return (
        <context.Provider value={{ userId, decodeToken, setUserId }}>
            {children}
        </context.Provider>
    )
}
