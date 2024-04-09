export default function Property({id, name, rating, price}){
    return(
        <div className="Property">
        <h1>{name}</h1>
        <h2>{price} a night</h2>
        <h3>{rating}</h3>
        </div>
        
    )
}