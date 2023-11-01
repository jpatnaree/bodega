import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventoryData, setInventoryData] = useState([])
    const [reorderRender, setReorderRender] = useState([])
    console.log(reorderRender)

    useEffect(() => {
        fetch('http://localhost:8001/inventory')
        .then(resp => resp.json())
        .then(inventoryJson => {
            setInventoryData(inventoryJson)
        })
    }, [])

    function handleDelete(id) {
        setInventoryData(inventoryData.filter(item => {
            return item.id !== id
        }))
        handleReorderDelete(id)
    }

    function updateReorderData (item) {
        const foundItem = reorderRender.find(i => {
            return i.id === item.id 
        })
        if(!foundItem) {
            setReorderRender([...reorderRender, item])
        }
    }

    function handleReorderDelete (id) {
        setReorderRender(reorderRender.filter(item => {
            return item.id !== id
        }))
    }

    return(
        <div className="container">
            <CurrentInventoryList inventoryData={inventoryData} handleDelete={handleDelete} updateReorderData={updateReorderData} />
            <ReorderInventoryList reorderRender={reorderRender} handleReorderDelete={handleReorderDelete} />
        </div>
    );
}

export default InventoryManager;