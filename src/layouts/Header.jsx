import React from "react";
import logo from "../images/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUserToken, updateUserName, updatePassword, updateFirstName, updateLastName } from "../redux/userDataSlice";

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
    const firstName = useSelector((state) => state.userData.firstName)
    const rememberMe = useSelector((state => state.userData.rememberMe))
    const dispatch = useDispatch()

    let navigate = useNavigate()
    let location = useLocation()

    function handleSignIn(){
        navigate("/login")
    }

    function handleSignOut(){
        navigate("/")
        dispatch(updateFirstName(""))
        dispatch(updateLastName(""))
        dispatch(updateUserToken(""))
        if(!rememberMe){
            dispatch(updateUserName(""))
            dispatch(updatePassword(""))
        }
    }

    return(
        <header>
            <img src={logo} alt="" />
            <section className={location.pathname !== "/profile" && "header__content"}>
                <section className="icon-with-name">
                    <FontAwesomeIcon icon={faUserCircle} className="header__icon"/>
                    {location.pathname === "/profile" && <p>{firstName}</p>}
                </section>
                {location.pathname === "/profile"? 
                    <section className="sign-out">
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </section> : <button onClick={handleSignIn}>Sign In</button>
                }
            </section>
        </header>
    )
}