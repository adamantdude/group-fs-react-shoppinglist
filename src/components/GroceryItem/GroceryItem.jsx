import './GroceryItem.css';
import { useState, useEffect } from 'react';

function GroceryItem({groceryItem, buyFN, removeFN, editFN}){

    const [editMode, setEdit] = useState(false);
    const [editName, setName] = useState('');
    const [editQuantity, setQuantity] = useState(1);
    const [editUnits, setUnits] = useState('');
    const [prevInfo, saveInfo] = useState({})

    useEffect(() => {
        stateHandler();
    },[])

    const stateHandler = () => {
        setName(groceryItem.name);
        setQuantity(groceryItem.quantity);
        setUnits(groceryItem.units);
    }

    const buyHandle = () => {
        buyFN(groceryItem.id);
    }
    
    const removeHandle = () => {
        removeFN(groceryItem.id);
    }

    const editHandle = () => {
        if(editMode) {
            setName(prevInfo.name);
            setQuantity(prevInfo.quantity);
            setUnits(prevInfo.units);
            saveInfo({});
        }
        else {
            saveInfo({name: editName, quantity: editQuantity, units: editUnits});
        }
        setEdit(!editMode);
    }

    const editSubmit = () => {
        editFN({id: groceryItem.id, 
                name: editName, 
                quantity: editQuantity,
                units: editUnits
            });
        setEdit(!editMode);
    }

    return(
        <>
            {!groceryItem.purchased && !editMode &&
                <div className="border">
                    <p>{groceryItem.name}</p>
                    <p>{groceryItem.quantity} {groceryItem.units}</p>
                    <div>
                        <button onClick={buyHandle} id="buyBtn">Buy</button>
                        <button onClick={editHandle} id="editBtn">Edit</button>
                        <button onClick={removeHandle} id="removeBtn">Remove</button>
                    </div>
                </div>
            }
            {groceryItem.purchased && !editMode &&
                <div className="border purchased">
                    <p>{groceryItem.name}</p>
                    <p>{groceryItem.quantity} {groceryItem.units}</p>
                    <label>Purchased</label>
                </div>
            }
            { editMode &&
                <div className='border edit'>
                    <input type="text" onChange={(e) => {setName(e.target.value)}} value={editName} id="editN"/>
                    <div>
                        <input type="number" onChange={(e) => {setQuantity(e.target.value)}} value={editQuantity} id="editQ"/>
                        <input type="text" onChange={(e) => {setUnits(e.target.value)}} value={editUnits} id="editU"/>
                    </div>
                    <div>
                        <button onClick={editHandle}>Cancel</button>
                        <button onClick={editSubmit}>Submit</button>
                    </div>
                </div>
            }
        </>
    );
}
export default GroceryItem;