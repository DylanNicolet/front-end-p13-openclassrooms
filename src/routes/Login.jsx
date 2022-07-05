import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Counter from "../components/Counter";

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
    const [formData, setFormData] = React.useState(
        {
            userName: "",
            password: "",
            rememberMe: false
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        //submit to API here
        console.log(formData)
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
                    onChange={handleChange}
                    value={formData.userName}
                    className="text-input"
                />
                <label htmlFor="password">Password</label>
                <input 
                    name="password"
                    type="text"
                    onChange={handleChange}
                    value={formData.password}
                    className="text-input"
                />
                <section className="rememberMe">
                    <input 
                        type="checkbox"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        name="rememberMe"
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                </section>
                <button onClick={handleSubmit}>Sign In</button>
            </form>
            <Counter />
        </section>
    )
}