import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateWalletAddress, validateAmount } from "../utils/validation";
import "../styles.css";

const Transaction = () => {
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        try {
            validateWalletAddress(walletAddress);
            validateAmount(amount);

            setWalletAddress("");
            setAmount("");
            setError("");

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="transaction-container">
            <h1>Enter Details</h1>
            <form>
                <label>
                    Wallet Address:
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}
        </div>
    );
};

export default Transaction;
