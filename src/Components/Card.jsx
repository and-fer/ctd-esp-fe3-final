import { useContext } from 'react'
import { ContextGlobal } from '../Context/Context'
import { Link } from 'react-router-dom'
import PerfilDentista from '../../public/images/doctor.jpg'

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal)

  const dentista = state.data.find((dentista) => dentista.id === id)
  const isFavorite = state.favs.some((fav) => fav.id === id)

  const toggleFav = () => {
    dispatch({
      type: 'TOGGLE_FAV',
      payload: dentista,
    })
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <div className="perfil_card_img">
          <img
            src={PerfilDentista}
            alt="Imagen de plantilla para perfiles de dentistas"
          />
        </div>
        <p>
          <strong>{name}</strong>
        </p>
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
