import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { ContextProvider } from './Components/utils/global.context'
import Home from './Routes/Home'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
