import { useState } from 'react'

const Form = ({ setSuccessForm }) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    email: '',
  })
  const [nombreEnviado, setNombreEnviado] = useState('')

  const [error, setError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { nombre, email } = datosUsuario

  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  const handleNombre = (event) => {
    setDatosUsuario({ ...datosUsuario, nombre: event.target.value })
  }

  const handleEmail = (event) => {
    setDatosUsuario({ ...datosUsuario, email: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      nombre.trim().length >= 5 &&
      email.trim().length >= 6 &&
      emailRegex.test(email)
    ) {
      setError(false)
      setNombreEnviado(nombre)
      setDatosUsuario({ nombre: '', email: '' })

      setIsSubmitted(true)
      setSuccessForm(true)

      console.log('Nombre:', nombre)
      console.log('Email:', email)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={handleNombre}
          disabled={isSubmitted}
        />
        <input
          type="email"
          placeholder="Email"
          name="nombre"
          id="email"
          value={email}
          onChange={handleEmail}
          disabled={isSubmitted}
        />
        <button type="submit" value="Submit" disabled={isSubmitted}>
          Submit
        </button>
      </form>
      <div>
        {error && (
          <p className="warning">
            ⚠️ Por favor, verifique su información nuevamente
          </p>
        )}
        {isSubmitted && (
          <p className="success">
            ✅ Gracias {nombreEnviado}, te contactaremos lo antes posible
          </p>
        )}
      </div>
    </div>
  )
}

export default Form
