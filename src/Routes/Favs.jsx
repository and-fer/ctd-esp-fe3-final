import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import { useNavigate } from 'react-router-dom'

const Favs = () => {
  const { state: dentistas, dispatch } = useContext(ContextGlobal)
  const navigate = useNavigate()

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVS' })
  }

  return (
    <>
      <h1>Dentistas favoritos</h1>
      {dentistas.favs.length > 0 ? (
        <>
          <div className="limpiar_favoritos">
            <button onClick={clearFavorites} className="limpiar_favoritos__btn">
              Limpiar lista de favoritos 🗑️
            </button>
          </div>
          <div className="card-grid">
            {dentistas.favs?.map((dentista) => (
              <Card
                key={dentista.id}
                id={dentista.id}
                name={dentista.name}
                username={dentista.username}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="sin_favoritos">
          <p className="sin_favoritos__txt">No hay favoritos todavía...</p>
          <button className="sin_favoritos__btn" onClick={() => navigate('/')}>
            « Volver a Home
          </button>
        </div>
      )}
    </>
  )
}

export default Favs
