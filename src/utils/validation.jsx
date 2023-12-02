export const validateWalletAddress = (walletAddress) => {
    if (!walletAddress.trim()) {
        throw new Error("Wallet address field cannot be empty");
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
        throw new Error("Invalid Ethereum address format");
    }
};

export const validateAmount = (amount) => {
    const numericAmount = Number(amount);

    if (isNaN(numericAmount) || numericAmount < 0 || numericAmount > 10000) {
        throw new Error(
            "Amount must be a number within the range of 0 to 10,000"
        );
    }
};
