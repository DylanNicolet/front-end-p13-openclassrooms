import React from "react";
import Feature from "../components/Feature";
import iconChat from "../images/icon-chat.png";
import iconMoney from "../images/icon-money.png";
import iconSecurity from "../images/icon-security.png";

/**
 * Component to render the Homepage
 * 
 * @component
 * @example
 * @returns (
 *  <Homepage />
 * ) 
 */
export default function Homepage(){
    const chatText = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    const moneyText= "The more you save with us, the higher your interest rate will be!"
    const securityText= "We use top of the line encryption to make sure your data and money is always safe."

    return(
        <section className="homepage">
            <section className="hero">
                <section className="hero-content">
                    <p className="hero-content__subtitle">No fees.</p>
                    <p className="hero-content__subtitle">No minimum deposit.</p>
                    <p className="hero-content__subtitle">High interest rates.</p>
                    <p className="hero-content__text">Open a savings account with Argent Bank today!</p>
                </section>
            </section>
            <section className="features-container">
                    <Feature imageSrc={iconChat} title="You are our #1 priority" text={chatText} />
                    <Feature imageSrc={iconMoney} title="More savings means higher rates" text={moneyText} />
                    <Feature imageSrc={iconSecurity} title="Security you can trust" text={securityText} />
                </section>
        </section>
    )
}