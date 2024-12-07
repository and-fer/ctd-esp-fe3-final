export const reducer = (state, action) => {
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
