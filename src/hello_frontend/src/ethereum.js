// src/ethereum.js

import { ethers } from "ethers";

// Konfigurasi Alchemy API
const ALCHEMY_API_URL = 'https://eth-sepolia.g.alchemy.com/v2/2H23T4zG5SjypKpF0oyNehgLiHQkNyoc'; // Ganti dengan API Alchemy kamu

export const getEthereumProvider = () => {
  const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_API_URL);
  return provider;
};

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
};

export const sendTransaction = async (toAddress, amount) => {
  try {
    const signer = getSigner();
    const tx = await signer.sendTransaction({
      to: toAddress,
      value: ethers.utils.parseEther(amount.toString())
    });
    console.log("Transaction sent:", tx);
    return tx;
  } catch (error) {
    console.error("Transaction failed", error);
  }
};
