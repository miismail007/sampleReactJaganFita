import React, { useEffect, useState } from 'react'
import Form from './Components/Form-Component/Form'
import Header from './Components/Header-component/Header'
import Products from './Components/Product-component/Products'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
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


  const setProductToState = (process,obj) => {
    if(process == 'add'){
      setProducts([...products,obj])
    }else{
      let newProducts = products
      newProducts.map((product) => {
        if(product.id === obj.id){
          product.name = obj.name
          product.description = obj.description
          product.price = obj.price
        }
      })
      setProducts(newProducts);
      setFormData({})
    }
    
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
    <Router>
      <div>
        <Header menu={menu} logo={logo}/>
        {/* <StateExample/> */}
        <Routes>
          <Route path="/home" element={
            <div>
              <Form setProductToState={setProductToState} formData={formData}/>
              <Products products={products} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
            </div>
          }/>
          <Route path="about" element={<h1>About</h1>}/>
          <Route path="contact" element={<h1>Contact</h1>}/>
        </Routes>
        
        
      </div>
    </Router>
  )
}

export default App





