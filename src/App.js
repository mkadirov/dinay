import React from 'react'
import MyContext from './components/Context/MyContext'
import {Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import Product from './pages/Product/Product'
import Shipments from './pages/Shipments/Shipments'
import Shipment from './pages/Shipment/Shipment'
import Orders from './pages/Orders/Orders'
import Products from './pages/Products/Products'
import Transports from './pages/Transports/Transports'
import ExcelReader from './pages/ExcelReader/ExcelReader'

function App() {
  return (
    <>
      <MyContext.Provider
       value = {{}}
      >
        <BrowserRouter>
          {/* <Header/> */}
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/order/:id' element = {<Order/>}/>
              <Route path='/orders' element = {<Orders/>}/>
              <Route path='/product/:id' element = {<Product/>}/>
              <Route path='/products' element = {<Products/>}/>
              <Route path='/shipments' element = {<Shipments/>}/>
              <Route path='/shipment/:id' element = {<Shipment/>}/>
              <Route path='/transports' element = {<Transports/>}/>
              <Route path='/excel_reader' element = {<ExcelReader/>}/>
            </Routes>
        </BrowserRouter>

      </MyContext.Provider>
    </>
  )
}

export default App