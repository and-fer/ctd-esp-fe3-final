import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { datosDentista } = useContext(ContextGlobal)
  console.log('DATOS DENTISTA', datosDentista)

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {datosDentista.map((dentista) => (
          <Card key={dentista.id} id={dentista.id} />
        ))}
      </div>
    </main>
  )
}

export default Home
