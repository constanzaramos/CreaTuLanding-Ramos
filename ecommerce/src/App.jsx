import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <NavBar />
      <ItemListContainer  greeting="¡Bienvenida a nuestra tienda!" />
    </>
  )
}

export default App
