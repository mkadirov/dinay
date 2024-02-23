import React from 'react'
import MyContext from './components/Context/MyContext'
import {Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'

function App() {
  return (
    <>
      <MyContext.Provider
       value = {{}}
      >
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/order/:id' element = {<Order/>}/>
            </Routes>
        </BrowserRouter>

      </MyContext.Provider>
    </>
  )
}

export default App