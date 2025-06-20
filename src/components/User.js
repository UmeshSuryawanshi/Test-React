import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h2>Count : {count}</h2>
            <h3>Name : {name}</h3>
            <h4>Location : Pune</h4>
            <h5>Handle : @Umesh46Suryawanshi</h5>
        </div>
    );
}

export default User;