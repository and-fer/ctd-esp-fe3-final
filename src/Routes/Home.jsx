import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const { state: dentistas } = useContext(ContextGlobal)

  return (
    <main className="Home">
      {dentistas.success && (
        <>
          <h1>Home</h1>
          <div className="card-grid">
            {dentistas.data.map((dentista) => (
              <Card
                key={dentista.id}
                id={dentista.id}
                name={dentista.name}
                username={dentista.username}
              />
            ))}
          </div>
        </>
      )}
      {dentistas.loading && (
        <div className="status_loading">
          <p>Cargando datos...</p>
        </div>
      )}
      {dentistas.error && (
        <div className="status_error">
          <p>Error: {dentistas.error}</p>
        </div>
      )}
    </main>
  )
}

export default Home
