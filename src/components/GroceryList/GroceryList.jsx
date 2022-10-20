import GroceryItem from "../GroceryItem/GroceryItem";
import './GroceryList.css';

function GroceryList({groceryList, buyFN, removeFN}){
    return(

        <>
            <div id="list">
                {groceryList.map(groItem=>(
                    <GroceryItem key={groItem.id} groceryItem={groItem} buyFN={buyFN} removeFN={removeFN}/>
                ))}
            </div>
        </>
    );
}
export default GroceryList;