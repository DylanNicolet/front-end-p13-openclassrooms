import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName, updateModalStatus } from "../redux/userDataSlice";
import InfoCard from "../components/InfoCard";
import EditNameModal from "../components/EditNameModal";

//Component to generate the profile page
export default function Profile(){
    const firstName = useSelector((state) => state.userData.firstName)
    const lastName = useSelector((state) => state.userData.lastName)
    const userToken = useSelector((state) => state.userData.userToken)
    const modalStatus = useSelector((state) => state.userData.modalStatus)
    const dispatch = useDispatch()

    //API call to obtain user data
    function getData() {
        fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer" + userToken,
            }
        })
        .then(responce => responce.json())
        .then(data => {
            dispatch(updateFirstName(data.body.firstName))
            dispatch(updateLastName(data.body.lastName))
        })
        .catch(error => console.log(error))
    }

    getData()

    function handleEditName(){
        dispatch(updateModalStatus(true))
    }

    return(
        <section className="profile">
            <h1 className="profile__title">Welcome back</h1>
            {!modalStatus && <h1 className="profile__title">{firstName + " " +  lastName}!</h1>}
            {modalStatus && <EditNameModal />}
            {!modalStatus && <button className="button-edit-name" onClick={handleEditName}>Edit Name</button>}
            <InfoCard accountType="Argent Bank Checking (x8349)" balance="2,082.79" balanceType="Available Balance" />
            <InfoCard accountType="Argent Bank Savings (x6712)" balance="10,948.22" balanceType="Available Balance" />
            <InfoCard accountType="Argent Bank Credit Card (x8349)" balance="184.30" balanceType="Current Balance" />
        </section>
    )
}