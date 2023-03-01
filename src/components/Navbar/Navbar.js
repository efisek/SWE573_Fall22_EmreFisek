import React from "react";
import { Link } from "@material-ui/core";

function Navbar() {
    let userId=5;

    return(
        <div>
            <ul>
                <li><Link to ="/">Home, where our hearts belong</Link></li>
                <li><Link to ={{pathname: 'user/' + userId}}>User!</Link></li>
            </ul>
        </div>
    )

}

export default Navbar;