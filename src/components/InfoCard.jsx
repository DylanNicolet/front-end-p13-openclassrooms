import React from "react";

export default function InfoCard(props){
    return(
        <section className="info-card">
            <section className="info-card__content">
                <p className="info-card__title">{props.title}</p>
                <p className="info-card__balance">${props.balance}</p>
                <p className="info-card__balance-type">{props.balanceType}</p>
            </section>
            <button className="info-card__button">View transactions</button>
        </section>
    )
}