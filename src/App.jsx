import { Information } from "./Pages/Information/Information"
import { Layout } from "./components/layout/Layout"
import { Contactanos } from "./Pages/Contactanos/Contactanos"
import { Home } from "./Pages/Home/home"
import { Producto } from "./Pages/Products/Producto"


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
