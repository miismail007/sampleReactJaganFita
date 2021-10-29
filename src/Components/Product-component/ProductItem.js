import React from 'react'

function ProductItem(props) {
    return (
        <div class="card col-md-3">
            <div class="card-body">
            <h4 class="card-title">{props.productItemData.name}</h4>
            <p class="card-text">{props.productItemData.description}</p>
            <p class="card-text">{props.productItemData.id}</p>
            <a href="#" class="btn btn-primary">{props.productItemData.price}</a>
            </div>
        </div>
    )
}

export default ProductItem
