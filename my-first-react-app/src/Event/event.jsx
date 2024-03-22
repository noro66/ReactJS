import Callbackevent from "./callbackevent";

export default function Event(){
    const  handelClick = (variabeles) => {
        alert(variabeles);
    }
    return <div>
        <Callbackevent handelClick={handelClick}/>
        <button onClick={handelClick}>click</button>
    </div>
}
//
// import {Component} from "react";
//
// export default class Event extends Component{
//     handelClick = ()=>{
//         alert('Boom!!')
//     }
//     render() {
//         return <div>
//             <button onClick={this.handelClick}>click</button>
//         </div>
//     }
// }