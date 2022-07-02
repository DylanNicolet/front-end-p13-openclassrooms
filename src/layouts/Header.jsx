import React from "react";
import logo from "../images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

/**
 * Display a header for the whole app
 * 
 * @component
 * @example
 * @returns (
 *  <Header />
 * ) 
 */
export default function Header(){
    let navigate = useNavigate()

    function handleClick(){
        navigate("/login")
    }

    return(
        <header>
            <img src={logo} alt="" />
            <FontAwesomeIcon icon={faUserCircle} className="header__icon"/>
            <button onClick={handleClick}>Sign In</button>
        </header>
    )
}