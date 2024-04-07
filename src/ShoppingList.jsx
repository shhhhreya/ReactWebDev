import ShoppingListItem from "./ShoppingListItem"

export default function ShoppingList({items}){
    return(
        <ul>
            { items.map((i)=>(
                 <ShoppingListItem key={i.name} name={i.name} quantity={i.quantity} done={i.completed}/>
             ))}
     </ul>
    )
}

