import {useEffect, useState} from "react";

export default function Counter(){
    const [counter, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    let timer =  null
    useEffect(() => {
        timer = setInterval(()=>{
            setTime(new Date());
        }, 1000)
    return () => clearInterval(timer)
    }, []);

    useEffect(() => {
        console.log('component did updated !')
    }, [counter, time]);


    return  <div>
        <button>Click click</button>
        it passed {time.toTimeString()}seconds ago</div>
}


//
// import {Component, useState} from "react";
//
// export default class Counter extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {counter: 0,
//         date : undefined,
//         }
//     }
//
//     componentDidMount() {
//         console.log(this.state)
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(prevState, this.state);
//     }
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return nextState.counter !== this.state.counter;
//     }
//
//     handelClick = ()=>{
//         console.log(this.state.counter)
//         this.setState(
//             prevState => {
//                 return {counter: prevState.counter+1}
//             }
//         )
//     }
//     render() {
//         return <div>
//             <button onClick={this.handelClick}>Click click</button>
//             it passed {this.state.counter} seconds ago</div>
//     }
// }
//
