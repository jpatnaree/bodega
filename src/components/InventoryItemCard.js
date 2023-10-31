import React from 'react'

function InventoryItemCard({item, handleDelete}) {

    const {image, name, price, id} = item

    return(
        <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button key={id} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;