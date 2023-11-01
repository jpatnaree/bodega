import React from 'react'

function InventoryItemCard({item, handleDelete, updateReorderData}) {

    const {image, name, price, id} = item

    return(
        <div className="card" >
            <img src={image} alt={name} onClick={()=>updateReorderData(item)}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button key={id} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;