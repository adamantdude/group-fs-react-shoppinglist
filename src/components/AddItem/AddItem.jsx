import { useState } from "react";
import './AddItem.css'

function AddItem({addFn}) {

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setQuantity] = useState(1);
    const [itemUnit, setUnit] = useState('');

    const submitHandle = (e) => {
        e.preventDefault();
        if(itemName && itemQuantity && itemUnit)
            addFn({item: itemName, quantity: itemQuantity, units: itemUnit})
        else
            alert('Please fill out the entire form');
    }

    return (
        <form onSubmit={submitHandle}>
            <p>Item:
                <input 
                    id="item"
                    type="text"
                    onChange={evt => setItemName(evt.target.value)}
                    value={itemName}
                />
            </p>
            <p>
                Quantity:
                <input
                    id="quant"
                    type="number"
                    onChange={evt => setQuantity(evt.target.value)}
                    value={itemQuantity}
                />
                Unit:
                <input
                    id="unit"
                    type="text"
                    onChange={evt => setUnit(evt.target.value)}
                    value={itemUnit}
                />
            </p>
            <button>Save</button>
        </form>
    )
}

export default AddItem;