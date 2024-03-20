// export default function Fruits({fruits}){
//     const displayFruits = ()=> fruits.map(fruit => <li>{fruit}</li>)
//     return <>
//         <h2>Fruits : </h2>
//         <ul>
//             {displayFruits()}
//         </ul>
//         </>
// }
import {Component} from "react";

export default class Fruits extends Component{
    constructor(props) {
        super(props);
    }
    displayFruits = () => this.props.fruits.map(fruit => <li>{fruit}</li>)

    render() {
        return <>
                   <h2>Fruits : </h2>
                    <ul>
                        {this.displayFruits()}
                    </ul>
                    </>
    }
}

