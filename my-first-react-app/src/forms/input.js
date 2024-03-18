// export default function Input({children, inputName}){
//     return (
//         <label for={inputName}> {children}
//              <input id={inputName} type="text" name={inputName}/>
//         </label>
//     )
// }


import {Component} from "react";

export default class Input extends Component{
    render() {
        return (
        <label for={this.props.inputName}> {this.props.children}
             <input id={this.props.inputName} type="text" name={this.props.inputName}/>
        </label>
    )
    }
}