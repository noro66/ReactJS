import {useState} from "react";

export default function Fruits({fruits})
{
        const [fruit, setFruit] = useState('')
        const [fruitList, setFruitList] = useState([])

    const handelInput = ()=>{
            const fruitValue = document.getElementById('fruit').value
            setFruit(fruitValue);
    }
    const handelSubmit = (e)=>{
            e.preventDefault();
            setFruitList([...fruitList, fruit])
    }
    const displayFruits = ()=> fruitList.map((fruit, key) => <li key={key}>{fruit}</li>)
    return <>
        <form>
            <input onChange={handelInput} id={'fruit'} type="text"/>
            <input onClick={handelSubmit} type="submit" value={'Add Fruit'}/>
        </form>
        <h2>Fruits : </h2>
        <ul>
            {displayFruits()}
        </ul>
        </>
}
// import {Component} from "react";
//
// export default class Fruits extends Component{
//     constructor(props) {
//         super(props);
//     }
//     displayFruits = () => this.props.fruits.map(fruit => <li>{fruit}</li>)
//
//     render() {
//         return <>
//                    <h2>Fruits : </h2>
//                     <ul>
//                         {this.displayFruits()}
//                     </ul>
//                     </>
//     }
// }

