import {Component} from "react";

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {counter: 0,
        date : undefined,
        }
    }
    componentDidMount()
    {
        setInterval(
            ()=>{
                this.setState(
                     prevState => {

                         return {counter: prevState.counter+1}
                     }
                )
            }, 1000
        )

    }

    render() {
        return <div>it passed {this.state.counter} seconds ago</div>
    }
}