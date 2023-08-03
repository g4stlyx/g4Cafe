import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

import {ProductProvider} from "./context/productsContext"
import { BrowserRouter, HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={"/g4Cafe"}>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>

)
