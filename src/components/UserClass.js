import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
           userInfo : {
            name : "Dummy Name",
            location : "Test Location",
            avatar_url : "avatar_url"
           }
        }
        //console.log(this.props.name + " Child constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/UmeshSuryawanshi");
        const jsonData = await data.json();
       console.log(jsonData);
       this.setState({
            userInfo : jsonData
         });
    }

    render() {
        console.log(this.state);
        const { name, location, login, avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">
                <div><img src={avatar_url}/></div>
                <h3>Name : {name}</h3>
                <h4>Location : {location}</h4>
                <h5>Handle : @{login}</h5>
            </div>
        );
    }
}

export default UserClass;