import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  loading: true,
  success: false,
  error: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        error: null,
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    case 'TOGGLE_FAV': {
      const isFav = state.favs.some((fav) => fav.id === action.payload.id)

      const updatedFavs = isFav
        ? state.favs.filter((fav) => fav.id !== action.payload.id)
        : [...state.favs, action.payload]

      return { ...state, favs: updatedFavs }
    }
    case 'CLEAR_FAVS':
      return {
        ...state,
        favs: [],
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
