import React from 'react'
import ReorderItemCard from './ReorderItemCard';

function ReorderInventoryList({reorderRender, handleReorderDelete}) {

    const reorderDisplay = reorderRender.map(item => {
        return <ReorderItemCard key={item.id} item={item} handleReorderDelete={handleReorderDelete} />
    })

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderDisplay}
            </div>
        </div>
    );
}

export default ReorderInventoryList;