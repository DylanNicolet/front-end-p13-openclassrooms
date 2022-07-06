import React from "react";
import { useSelector } from "react-redux";
import InfoCard from "../components/InfoCard";

export default function Profile(){
    const userName = useSelector((state) => state.userData.userName)

    return(
        <section className="profile">
            <h1 className="profile__title">Welcome back <br /> {userName}! </h1>
            <button className="button-edit-name">Edit Name</button>
            <InfoCard title="Argent Bank Checking (x8349)" balance="2,082.79" balanceType="Available Balance" />
            <InfoCard title="Argent Bank Savings (x6712)" balance="10,948.22" balanceType="Available Balance" />
            <InfoCard title="Argent Bank Credit Card (x8349)" balance="184.30" balanceType="Current Balance" />
        </section>
    )
}