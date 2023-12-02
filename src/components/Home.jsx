import React from "react";
import walletImage from "../images/Wallet_image.gif";
import "../styles.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="image-container">
                <img src={walletImage} alt="Wallet" />
            </div>
        </div>
    );
};

export default Home;
