import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTAS':
      return {
        ...state,
        data: action.payload,
      }
    case 'TOGGLE_FAV': {
      const isFav = state.favs.some((fav) => fav.id === action.payload.id)

      const updatedFavs = isFav
        ? state.favs.filter((fav) => fav.id !== action.payload.id)
        : [...state.favs, action.payload]

      return { ...state, favs: updatedFavs }
    }
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      }
    default:
      throw new Error(`Ocurrió un error con la action type: ${action.type}`)
  }
}

export const ContextGlobal = createContext()

export const ContextProvider = ({ children }) => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)

        dispatch({ type: 'GET_DENTISTAS', payload: response.data })
      } catch (err) {
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
