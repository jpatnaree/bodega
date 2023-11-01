import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventoryData, handleDelete, updateReorderData}) {

    const inventoryDisplay = inventoryData.map(item => {
        return <InventoryItemCard key={item.id} item={item} handleDelete={handleDelete} updateReorderData={updateReorderData} />
    })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryDisplay}
            </div>
        </div>
    );
}

export default CurrentInventoryList;