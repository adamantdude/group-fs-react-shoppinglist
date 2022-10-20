import GroceryItem from "../GroceryItem/GroceryItem";

function GroceryList({groceryList}){
    return(

        <>
            <div>
                {groceryList.map(groItem=>(
                    <GroceryItem key={groItem.id} groceryItem={groItem} />
                ))}
            </div>
        </>
    );
}
export default GroceryList;