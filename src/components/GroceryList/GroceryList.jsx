import GroceryItem from "../GroceryItem/GroceryItem";
import './GroceryList.css';

function GroceryList({groceryList, buyFN, removeFN, editFN}){

    return(
        <>
            <div id="list">
                {groceryList.map(groItem=>(
                    <GroceryItem key={groItem.id} groceryItem={groItem} buyFN={buyFN} removeFN={removeFN}
                        editFN={editFN}
                    />
                ))}
            </div>
        </>
    );
}
export default GroceryList;