import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateModalStatus } from "../redux/userDataSlice";

export default function EditNameModal(){
    const [newFirstName, setNewFirstName] = React.useState("")
    const [newLastName, setNewLastName] = React.useState("")
    const userToken = useSelector((state) => state.userData.userToken)
    const dispatch = useDispatch()

    function handleConfirm(event){
        event.preventDefault()

        fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer" + userToken,
            },
            body: JSON.stringify({
                "firstName" : newFirstName,
                "lastName" : newLastName
            })
        })
        .then(responce => responce.json())
        .then(data => {
            if(data.status === 200){
                dispatch(updateModalStatus(false))
            }
        })
        .catch(error => console.log(error))
    }

    function handleCancel(){
        dispatch(updateModalStatus(false))
    }

    return(
        <section className="modal__container">
            <form className="modal__form">
                <input type="text" onChange={e => setNewFirstName(e.target.value)} value={newFirstName} placeholder="First Name" />
                <input type="text" onChange={e => setNewLastName(e.target.value)} value={newLastName} placeholder = "Last Name" />
                <button onClick={handleConfirm}>Confirm</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </section>
    )
}