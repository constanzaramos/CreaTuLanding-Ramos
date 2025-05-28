import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import banner from '../src/assets/banner.png'

function App() {

  return (
    <>
    <NavBar />
    <section className='banner'>
      <img src= {banner} alt="banner-image" />
    </section>
      <ItemListContainer  greeting="¡Bienvenida a nuestra tienda!" />

    </>
  )
}

export default App
