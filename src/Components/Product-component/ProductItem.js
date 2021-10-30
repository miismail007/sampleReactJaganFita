import React from 'react'

function ProductItem(props) {
    return (
        <div className="card col-md-3">
            <div className="card-body">
            <h4 className="card-title">{props.productItemData.name}</h4>
            <p className="card-text">{props.productItemData.description}</p>
            <p className="card-text">{props.productItemData.price}</p>
            <a href="#" className="btn btn-primary" onClick={()=>{
                props.updateProduct(props.productItemData.id)
            }}>Update</a>
            <a href="#" className="btn btn-primary" onClick={()=>{
                props.deleteProduct(props.productItemData.id)
            }}>Delete</a>
            </div>
        </div>
    )
}

export default ProductItem
