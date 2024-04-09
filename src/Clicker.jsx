function handleClick(msg){
    alert({msg})
}

export default function Clicker({msg, btnTxt}){
    return <button onClick={()=> alert(msg)}>{btnTxt}</button>
}
