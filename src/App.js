import React, { useEffect, useState } from 'react'
import Form from './Components/Form-Component/Form'
import Header from './Components/Header-component/Header'
import Products from './Components/Product-component/Products'
import StateExample from './StateExample'

function App() {


  






  const [ logo , setlogo ] = useState("Fita")
  const [ menu , setMenu ] = useState(["Home" , "about" , "contact"])
  const [ products , setProducts ] = useState([])
  const [ formData , setFormData] = useState({})


  useEffect(
    ()=>{
      console.log("UseEffect triggered");
    },[products]
  )


  const setProductToState = (obj) => {
    setProducts([...products,obj])
  }
  

  const deleteProduct = (id) => {
    let newProducts = []
    products.map(product=> {
      if(product.id !== id){
        newProducts.push(product)
      }
    })
    setProducts(newProducts)
  }

  const updateProduct = (id) => {
    products.map(product=> {
      if(product.id === id){
        setFormData(product)
      }
    })
  }
  return (
    <div>
      <StateExample/>
      <Form setProductToState={setProductToState} formData={formData}/>
      <Header menu={menu} logo={logo}/>
      <Products products={products} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
    </div>
  )
}

export default App
