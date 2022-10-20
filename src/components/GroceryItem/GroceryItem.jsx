function GroceryItem({groceryItem}){
    
    return(
        <>
            <div>
                <label>{groceryItem.name}</label>
                <label>{groceryItem.quantity}</label>
                <label>{groceryItem.units}</label>
                <button>Buy</button>
                <button>Remove</button>
            </div>
        </>
    );
}
export default GroceryItem;