import React from 'react'

function ReorderItemCard({item, handleReorderDelete}) {

    const {image, name, price, id} = item

    return(
        <div className="card" >
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button key={id} onClick={() => handleReorderDelete(id)}>Delete</button>
        </div>
    );
}

export default ReorderItemCard;