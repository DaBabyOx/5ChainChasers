import React, { useState } from 'react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Validation schema using Zod
const paymentSchema = z.object({
  method: z.string().nonempty("Payment method is required."),
});

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSubmit: (method: string) => Promise<void>;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onPaymentSubmit }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const totalPriceIDR = 199000; // Total price in local currency (IDR)
  const exchangeRate = 41808141; // Example exchange rate: 1 ETH = 41,808,141 IDR
  const amountDueETH = (totalPriceIDR / exchangeRate).toFixed(10); // Calculated amount due in ETH

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = paymentSchema.safeParse({ method: selectedMethod });

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError('');
    setSuccess(false);

    try {
      await onPaymentSubmit(selectedMethod); // Ensure this returns Promise<void>
      setSuccess(true);

      // Redirect to /home after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      setError("Payment failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pb-[500px] bg-black w-full backdrop-blur-lg bg-opacity-90 z-50 font-poppins transition-all duration-300">
      <div className="bg-black border border-neutral-950 rounded-lg shadow-lg p-8 w-96 text-white relative">
        {/* Close "X" Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition duration-300"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Pay</h2>

        <p className="text-center text-base text-neutral-500 mb-2">Total</p>
        <p className="text-center text-3xl font-extrabold mb-8">Rp{totalPriceIDR.toLocaleString()}</p>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">Payment successful! Redirecting...</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="text-sm font-semibold mb-3 text-center">Payment Method</p>
            <div className="grid grid-cols-2 gap-4">
              {['BTC', 'ETH', 'LTC', 'USDC'].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setSelectedMethod(method)}
                  className={`flex items-center justify-center border rounded-lg px-5 py-3 font-bold transition duration-300 ${
                    selectedMethod === method
                      ? 'bg-green-800 text-white border-green-900'
                      : 'bg-black text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  {/* Replace with actual icons */}
                  <span>{method}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-300 text-center mt-4">
            <p>
              <span className="font-normal text-neutral-500">Exchange rate: </span>1 ETH = Rp
              {exchangeRate.toLocaleString()}
            </p>
            <p className="mt-1">
              <span className="font-normal text-neutral-500">Amount Due:</span> {amountDueETH} ETH
            </p>
          </div>

          <div className="px-6 w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-red-800 text-base text-white hover:text-white/85 rounded-lg py-3 mt-6 font-semibold hover:bg-red-900 transition duration-300"
            >
              Accept & Pay
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="mt-6 text-gray-400 text-base hover:text-white text-center block w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
