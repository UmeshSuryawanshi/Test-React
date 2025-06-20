import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props) {
        super(props);
        //console.log("Parent constructor");
    }

    componentDidMount() {
        //console.log("Parent componentDidMount");
    }

    render(){
        //console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is React test</h2>
                <UserClass name={"Umesh"}/>
            </div>
        );
    }
}

export default About;