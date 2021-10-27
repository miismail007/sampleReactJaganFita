import React from 'react'
import ProductItem from './ProductItem'

function Products(props) {
    return (
        <div className="">
            <div className="row">
                {props.products.map(
                    (productData)=>{
                        return <ProductItem productItemData={productData} />
                    }
                )}
            </div>
        </div>
    )
}

export default Products
