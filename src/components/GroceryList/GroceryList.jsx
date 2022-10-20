import GroceryItem from "../GroceryItem/GroceryItem";

function GroceryList({groceryList, buyFN, removeFN}){
    return(

        <>
            <div>
                {groceryList.map(groItem=>(
                    <GroceryItem key={groItem.id} groceryItem={groItem} buyFN={buyFN} removeFN={removeFN}/>
                ))}
            </div>
        </>
    );
}
export default GroceryList;