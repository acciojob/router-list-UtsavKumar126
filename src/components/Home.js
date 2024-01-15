import React from "react";
import { NavLink } from "react-router-dom";



const Home=()=>{

    return(
        <div>
            <ul>
                <li><NavLink to={"/item/1"}>Item 1</NavLink></li>
                <li><NavLink to={"/item/2"}>Item 2</NavLink></li>
                <li><NavLink to={"/item/3"}>Item 3</NavLink></li>
            </ul>
        </div>
    )

}
export default Home;