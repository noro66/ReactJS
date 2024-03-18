export default function Fruits({fruits}){
    const displayFruits = ()=> fruits.map(fruit => <li>{fruit}</li>)
    return <>
        <h2>Fruits : </h2>
        <ul>
            {displayFruits()}
        </ul>
        </>
}