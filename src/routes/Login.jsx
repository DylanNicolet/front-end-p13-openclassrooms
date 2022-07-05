import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName, updatePassword, updateRememberMe } from "../redux/formSlice";

/**
 * Component to render the Login page with a login form
 * 
 * @component
 * @example
 * @returns (
 *  <Login />
 * ) 
 */
export default function Login(){
    //Redux states
    const userName = useSelector((state) => state.form.userName)
    const password = useSelector((state) => state.form.password)
    const rememberMe = useSelector((state) => state.form.rememberMe)
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        console.log("username: " + userName)
        console.log("password: " + password)
        console.log("rememberMe?: " + rememberMe)
        //submit to API here
    }

    return(
        <section className="login__page">
            <form className="login__form">
                <FontAwesomeIcon icon={faUserCircle} className="header__icon"/>
                <h1>Sign In</h1>
                <label htmlFor="userName">Username</label>
                <input 
                    name="userName"
                    type="text"
                    onChange={e => dispatch(updateUserName(e.target.value))}
                    value={userName}
                    className="text-input"
                />
                <label htmlFor="password">Password</label>
                <input 
                    name="password"
                    type="text"
                    onChange={e => dispatch(updatePassword(e.target.value))}
                    value={password}
                    className="text-input"
                />
                <section className="rememberMe">
                    <input 
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={e => dispatch(updateRememberMe(!rememberMe))}
                        name="rememberMe"
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                </section>
                <button onClick={handleSubmit}>Sign In</button>
            </form>
        </section>
    )
}