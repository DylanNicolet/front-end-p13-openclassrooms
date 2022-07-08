import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName, updateModalStatus } from "../redux/userDataSlice";
import InfoCard from "../components/InfoCard";
import EditNameModal from "../components/EditNameModal";

export default function Profile(){
    const firstName = useSelector((state) => state.userData.firstName)
    const lastName = useSelector((state) => state.userData.lastName)
    const userToken = useSelector((state) => state.userData.userToken)
    const modalStatus = useSelector((state) => state.userData.modalStatus)
    const dispatch = useDispatch()

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
            {modalStatus && <EditNameModal />}
            <h1 className="profile__title">Welcome back <br /> {firstName + " " +  lastName}! </h1>
            <button className="button-edit-name" onClick={handleEditName}>Edit Name</button>
            <InfoCard title="Argent Bank Checking (x8349)" balance="2,082.79" balanceType="Available Balance" />
            <InfoCard title="Argent Bank Savings (x6712)" balance="10,948.22" balanceType="Available Balance" />
            <InfoCard title="Argent Bank Credit Card (x8349)" balance="184.30" balanceType="Current Balance" />
        </section>
    )
}