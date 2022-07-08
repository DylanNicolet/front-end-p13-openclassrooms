import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName, updatePassword, updateRememberMe, updateUserToken } from "../redux/userDataSlice";
import { useNavigate } from "react-router-dom";

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
    const userName = useSelector((state) => state.userData.userName)
    const password = useSelector((state) => state.userData.password)
    const rememberMe = useSelector((state) => state.userData.rememberMe)
    const dispatch = useDispatch()

    let navigate = useNavigate()

    //Function for API call on user identification
    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userName,
                password: password,
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){
                dispatch(updateUserToken(data.body.token))
                navigate("/profile")
            }
        })
        .catch(error => {
            console.log(error)
        })
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
                    className={"text-input"} //add conditional rendering here for background color
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