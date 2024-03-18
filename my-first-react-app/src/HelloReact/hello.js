
export default function Hello({lastName}){
    console.log(lastName)
    return (<div>
        <h2>Hello, {lastName}</h2>
    </div>)
}

// import {Component} from "react";
//
// export default class Hello extends Component{
//     render() {
//         console.log(this.props.lastName);
//         return (<div>
//              <h2>Hello, {this.props.lastName}</h2>
//              </div>)
//     }
// }