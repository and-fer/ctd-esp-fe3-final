import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal)

  let storedDentistas = JSON.parse(localStorage.getItem('favs')) || []
  const dentista = state.data.find((dentista) => dentista.id === id)
  const isFavorite =
    state.favs.some((fav) => fav.id === id) ||
    storedDentistas.some((fav) => fav.id === id)

  if (!Array.isArray(storedDentistas)) {
    console.error('storedDentistas no es un Array')
    storedDentistas = []
  }

  const toggleFav = () => {
    dispatch({
      type: 'TOGGLE_FAV',
      payload: dentista,
    })
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <p>{id}</p>
        <sub>name:</sub>
        <p>
          <strong>{name}</strong>
        </p>
        <sub>username:</sub>
        <p>{username}</p>
      </Link>
      <button
        onClick={toggleFav}
        className={`favButton ${isFavorite ? 'favorited' : ''}`}
      >
        {isFavorite ? '⭐ Quitar de favoritos' : '⭐ Agregar a favoritos'}
      </button>
    </div>
  )
}

export default Card
