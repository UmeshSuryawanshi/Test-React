import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"


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
                <div>
                    LoggedIn User :
                    <UserContext.Consumer>
                        {
                        ({loggedInUser})=>{
                            return <h2 className="font-bold">{loggedInUser}</h2>
                          }
                        }
                </UserContext.Consumer>
                </div>
                <UserClass name={"Umesh"}/>
            </div>
        );
    }
}

export default About;