
// export default function Hello({lastName}){
//     return (<div>
//         <h2>Hello, {lastName}</h2>
//     </div>)
// }

import {Component} from "react";

export default class Hello extends Component{
    componentDidMount() {
        console.log('component did mount')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update !')
    }

    componentWillUnmount() {
        console.log('component Layre7mo')
    }

    render() {
        return (<div>
             <h2>Hello, {this.props.lastName}</h2>
             </div>)
    }
}