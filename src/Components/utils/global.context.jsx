import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'

// export const initialState = { theme: 'light', data: [] }
export const initialState = {
   theme: localStorage.getItem('theme') || 'light',
   data: [],
   favs: [],
}

// Manejar: API, claro/oscuro, FAVs
const reducer = (state, action) => {
   switch (action.type) {
      case 'GET_DENTISTAS':
         return {
            ...state,
            data: action.payload,
         }
      case 'ADD_FAV':
         return {
            ...state,
            favs: [...state.favs, action.payload],
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
   //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
   const url = 'https://jsonplaceholder.typicode.com/users'
   // const [datosDentista, setDatosDentista] = useState([])
   const [state, dispatch] = useReducer(reducer, initialState)
   console.log('STATE FROM CONTEXT :::', state.favs)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url)

            // setDatosDentista(response.data)
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

   return (
      <ContextGlobal.Provider value={{ state, dispatch }}>
         <div className={state.theme}>{children}</div>
      </ContextGlobal.Provider>
   )
}
