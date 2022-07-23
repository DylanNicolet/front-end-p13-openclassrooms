import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateModalStatus } from "../redux/userDataSlice";

//Component for updating first name and last name on the user profile
export default function EditNameModal(){
    
    const userToken = useSelector((state) => state.userData.userToken)
    const firstName = useSelector((state) => state.userData.firstName)
    const lastName = useSelector((state) => state.userData.lastName)
    const dispatch = useDispatch()

    const [newFirstName, setNewFirstName] = React.useState(firstName)
    const [newLastName, setNewLastName] = React.useState(lastName)

    //Function for sending PUT API request and alter the database 
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
        <form className="modal__form">
            <input type="text" onChange={e => setNewFirstName(e.target.value)} value={newFirstName} />
            <input type="text" onChange={e => setNewLastName(e.target.value)} value={newLastName} />
            <button onClick={handleConfirm}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}