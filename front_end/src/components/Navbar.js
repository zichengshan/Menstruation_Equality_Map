import React from "react"
import logo from "../images/logo.png"

function Navbar() {
    return (
        <div className="nav">
            <img className="nav--logo" src={logo} />
            <h1 className="nav--title">Menstruation Products Map</h1>
        </div>

    )
}

export default Navbar