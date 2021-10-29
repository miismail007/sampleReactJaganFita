import React, { useState } from 'react'
import Form from './Components/Form-Component/Form'
import Header from './Components/Header-component/Header'
import Products from './Components/Product-component/Products'
import StateExample from './StateExample'

function App() {
  const [ logo , setlogo ] = useState("Fita")
  const [ menu , setMenu ] = useState(["Home" , "about" , "contact"])
  const [ products , setProducts ] = useState([])

  const setProductToState = (obj) => {
    setProducts([...products,obj])
  }
  return (
    <div>
      <StateExample/>
      <Form setProductToState={setProductToState}/>
      <Header menu={menu} logo={logo}/>
      <Products products={products}/>
    </div>
  )
}

export default App
