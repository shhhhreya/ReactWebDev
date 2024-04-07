export default function ShoppingListItem({name, quantity, done}){
    const styles = {color: !done ? "chartreuse" : "grey",
                    textDecoration: done? "line-through":"none"}
    return(
        <li style={styles}>
            {name} - {quantity}
        </li>
    )
}
