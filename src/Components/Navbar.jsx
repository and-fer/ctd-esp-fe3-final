import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favs">
        Favoritos <span className="fav_counter">{state.favs.length}</span>
      </Link>
      <Link to="/contact">Contacto</Link>
      <button
        className="themeButton"
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      >
        {state.theme === 'light' ? '🌞' : '🌚'}
      </button>
    </nav>
  )
}
export default Navbar
