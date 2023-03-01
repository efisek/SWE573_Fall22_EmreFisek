import React from "react";
import {Link, useParams} from "react-router-dom";

function User() {
    const {userId} = useParams();
    return(
        <div>
            User equals  {userId}
        </div>
    )
}

export default User;