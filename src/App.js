import React from 'react'
import Header from './Components/Header-component/Header'
import Products from './Components/Product-component/Products'

function App() {
  const menu = ['Home','Gallery',"About","Contact"]
  var logo = "Fita"
  const products = [
    {
      name : "samsung m31",
      description : "Recent Flagship mobile",
      price : "13000"
    },
    {
      name : "samsung m32",
      description : "Recent Flagship mobile",
      price : "15000"
    },
    {
      name : "samsung m51",
      description : "Recent Flagship mobile",
      price : "17000"
    },
    {
      name : "samsung m52",
      description : "Recent Flagship mobile",
      price : "19000"
    },
    {
      name : "samsung m31",
      description : "Recent Flagship mobile",
      price : "13000"
    },
    {
      name : "samsung m32",
      description : "Recent Flagship mobile",
      price : "15000"
    },
    {
      name : "samsung m51",
      description : "Recent Flagship mobile",
      price : "17000"
    },
    {
      name : "samsung m52",
      description : "Recent Flagship mobile",
      price : "19000"
    }
  ]
  return (
    <div>
      <Header menu={menu} logo={logo}/>
      <Products products={products}/>
    </div>
  )
}

export default App
