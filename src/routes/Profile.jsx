import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName } from "../redux/userDataSlice";
import InfoCard from "../components/InfoCard";

export default function Profile(){
    const firstName = useSelector((state) => state.userData.firstName)
    const lastName = useSelector((state) => state.userData.lastName)
    const userToken = useSelector((state) => state.userData.userToken)
    const dispatch = useDispatch()

    React.useEffect(() => {
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
    }, [])

    return(
        <section className="profile">
            <h1 className="profile__title">Welcome back <br /> {firstName + " " +  lastName}! </h1>
            <button className="button-edit-name">Edit Name</button>
            <InfoCard title="Argent Bank Checking (x8349)" balance="2,082.79" balanceType="Available Balance" />
            <InfoCard title="Argent Bank Savings (x6712)" balance="10,948.22" balanceType="Available Balance" />
            <InfoCard title="Argent Bank Credit Card (x8349)" balance="184.30" balanceType="Current Balance" />
        </section>
    )
}