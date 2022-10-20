import './GroceryItem.css';

function GroceryItem({groceryItem, buyFN, removeFN}){

    const buyHandle = () => {
        buyFN(groceryItem.id);
    }
    
    const removeHandle = () => {
        removeFN(groceryItem.id);
    }

    return(
        <>
            <div className="border">
                <p>{groceryItem.name}</p>
                <p>{groceryItem.quantity} {groceryItem.units}</p>
                <div>
                    <button onClick={buyHandle}>Buy</button>
                    <button onClick={removeHandle}>Remove</button>
                </div>
            </div>
        </>
    );
}
export default GroceryItem;