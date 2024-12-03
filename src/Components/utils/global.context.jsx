import axios from 'axios'
import { createContext, useEffect, useReducer, useState } from 'react'

// export const initialState = { theme: 'light', data: [] }
export const initialState = { theme: 'light' }

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_mode':
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    case 'set_mode':
      return {
        ...state,
        theme: action.payload,
      }
    default:
      throw new Error(`Ocurrió un error con la action type: ${action.type}`)
  }
}

export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [datosDentista, setDatosDentista] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)

        setDatosDentista(response.data)

        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <ContextGlobal.Provider value={{ datosDentista, state, dispatch }}>
      <div className={state.theme}>{children}</div>
    </ContextGlobal.Provider>
  )
}
