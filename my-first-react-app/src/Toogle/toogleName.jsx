import Hello from "../HelloReact/hello";
import {Component} from "react";

export default class ToogleName extends  Component{

        constructor(props) {
            super(props);
            this.state = {
                displayName: true
            }
        }
    toogleName = () => {
            this.setState(prevState => {
                return {displayName :  !prevState.displayName}
            })
    }
    render (){
        return <div>
            <button onClick={this.toogleName}>{(this.state.displayName).toString()}</button>
            {this.state.displayName ? <Hello lastName={'mohamed'}/>
                : undefined}
        </div>
    }
}