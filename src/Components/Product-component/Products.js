import React from 'react'
import ProductItem from './ProductItem'

function Products(props) {
    return (
        <div className="container">
            <div className="row">
                {props.products.map(
                    (productData)=>{
                        return <ProductItem productItemData={productData} key={Math.random()} deleteProduct = {props.deleteProduct}
                        updateProduct = {props.updateProduct} />
                    }
                )}
            </div>
        </div>
    )
}

export default Products
