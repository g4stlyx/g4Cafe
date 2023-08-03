import { useContext, useEffect } from 'react'
import { Route, Routes, HashRouter } from "react-router-dom";

import ProductsContext from './context/productsContext'

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu';


function App() {

  const {fetchCategories,categories} = useContext(ProductsContext)

  useEffect(()=>{
    fetchCategories()
  },[])

  return (
    <div className='App'>
          <Header />
          <Routes>
          <Route path="https://g4stlyx.github.io/g4Cafe/" exact element={<Dashboard />} />
          <Route path="https://g4stlyx.github.io/g4Cafe/menu" element={<Menu />} />

          {
              categories.map(category=>{
                  <Route
                  key={category.category_name}
                  path={"https://g4stlyx.github.io/g4Cafe/menu#"+category.category_name}
                  element={<Menu chosenCategoryByUser={category}/>}
                  />
              })
          }
          
          </Routes>
          <Footer />
    </div>
  )
}

export default App
