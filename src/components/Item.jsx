import React from "react";
import './itemList.scss';

const Item = ({ product }) => {
    return(
        <div>
            <div className="item-card">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Precio: ${product.price.toFixed(3)}</p>
            </div>
        </div>
    )
}
export default Item;