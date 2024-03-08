import React from "react";
import NightmareEmporium from "./images/nightmareEmporium.jpg"


function Header(){

    return(
        <div className="row d-flex align-items-baseline Header">
            <div className="col-sm-2 d-flex align-items-start">
                <img src={NightmareEmporium} alt="Nightmare Emporium" />
            </div>
            <div className="col-sm-10 text-center">
                <h1>Smitty's Nightmare Emporium</h1>
            </div>
        </div>
    )
}

export default Header