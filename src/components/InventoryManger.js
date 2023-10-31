import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventoryData, setInventoryData] = useState([])

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
    }

    return(
        <div className="container">
            <CurrentInventoryList inventoryData={inventoryData} handleDelete={handleDelete} />
            <ReorderInventoryList />
        </div>
    );
}

export default InventoryManager;