import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="not_found">
      <h1>Página no encontrada</h1>
      <Link to="/">« Volver a página de inicio</Link>
    </div>
  )
}

export default NotFoundPage
