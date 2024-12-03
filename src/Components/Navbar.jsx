import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { dispatch } = useContext(ContextGlobal)

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/contact">Contacto</Link>
      <button onClick={() => dispatch({ type: 'toggle_mode' })}>
        Change theme
      </button>
    </nav>
  )
}
export default Navbar

