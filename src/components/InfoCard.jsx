import React from "react";
import propTypes from "prop-types";

//Component to display account informations on the profile page
export default function InfoCard(props){
    return(
        <section className="info-card">
            <section className="info-card__content">
                <p className="info-card__title">{props.accountType}</p>
                <p className="info-card__balance">${props.balance}</p>
                <p className="info-card__balance-type">{props.balanceType}</p>
            </section>
            <button className="info-card__button">View transactions</button>
        </section>
    )
}

InfoCard.propTypes = {
    //Type of account
    title:propTypes.string,

    //Balance amount
    balance:propTypes.string,

    //Type of balance
    text:propTypes.string
}