// import {useState} from "react";
//
// export default function Counter(){
//     const [counter, setCount] = useState(0);
//     return  <div>
//         <button onClick={()=>{
//             setCount(prevState => {
//                 return prevState + 1
//             })
//         }}>Click click</button>
//         it passed {counter} seconds ago</div>
// }



import {Component, useState} from "react";

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {counter: 0,
        date : undefined,
        }
    }

    componentDidMount() {
        console.log(this.state)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState, this.state);
    }

    handelClick = ()=>{
        this.setState(
            prevState => {

                return {counter: prevState.counter+1}
            }
        )
    }
    render() {
        return <div>
            <button onClick={this.handelClick}>Click click</button>
            it passed {this.state.counter} seconds ago</div>
    }
}