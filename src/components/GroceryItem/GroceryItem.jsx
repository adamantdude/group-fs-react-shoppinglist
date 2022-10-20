function GroceryItem({groceryItem, buyFN, removeFN}){

    const buyHandle = () => {
        buyFN(groceryItem.id);
    }
    
    const removeHandle = () => {
        removeFN(groceryItem.id);
    }

    return(
        <>
            <div>
                <label>{groceryItem.name}</label>
                <label>{groceryItem.quantity}</label>
                <label>{groceryItem.units}</label>
                <button onClick={buyHandle}>Buy</button>
                <button onClick={removeHandle}>Remove</button>
            </div>
        </>
    );
}
export default GroceryItem;