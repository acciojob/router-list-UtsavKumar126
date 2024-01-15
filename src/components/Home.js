import React from "react";
import { NavLink } from "react-router-dom";



const Home=()=>{

    return(
        <div>
            <ul>
                <li><NavLink to={"/item/1"}>Item1</NavLink></li>
                <li><NavLink to={"/item/2"}>Item2</NavLink></li>
                <li><NavLink to={"/item/3"}>Item3</NavLink></li>
            </ul>
        </div>
    )

}
export default Home;