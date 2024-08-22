import { Information } from "./Pages/Information/Information"
import { Layout } from "./components/layout/Layout"
import { Contactanos } from "./Pages/Contactanos/Contactanos"
import { Home } from "./Pages/Home/home"
import { Producto } from "./Pages/Products/Producto"
import L from 'leaflet';

// Configura el mapa y marcadores usando L
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

function App() {


  return (
    <>
      <Layout>
        <Home/>
        <Information/>
        <Producto/>
        <Contactanos/>
      </Layout>
    </>
  )
}

export default App
