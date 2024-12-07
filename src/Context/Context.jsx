import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducers/reducer'

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  loading: true,
  success: false,
  error: null,
}

export const ContextGlobal = createContext()

export const ContextProvider = ({ children }) => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
      try {
        const response = await axios.get(url)

        dispatch({ type: 'SUCCESS', payload: response.data })
      } catch (err) {
        dispatch({ type: 'ERROR', payload: err.message })
        console.log(err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      <div className={state.theme}>{children}</div>
    </ContextGlobal.Provider>
  )
}
