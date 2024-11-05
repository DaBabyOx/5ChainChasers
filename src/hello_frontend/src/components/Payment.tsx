import React, { useEffect, useState } from 'react';

const UltimateErrorPage = () => {
    const [count, setCount] = useState(10);
    const [randomQuote, setRandomQuote] = useState("");
    const [randomChars, setRandomChars] = useState("");
    
    const quotes = [
        "Kesalahan adalah jalan menuju kebijaksanaan.",
        "Apakah kamu yakin ini adalah kesalahan?",
        "Misteri tidak terpecahkan.",
        "Apakah ini hanya mimpi?",
        "Terkadang, kita tidak bisa memecahkan misteri...",
        "Bingung itu adalah cara baru untuk memahami.",
        "Apakah kamu sudah mencoba mematikan dan menghidupkan kembali?",
        "Hanya ada satu kebenaran: semua ini tidak nyata."
    ];

    useEffect(() => {
        const countdown = setInterval(() => {
            setCount(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);

        const quoteInterval = setInterval(() => {
            setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 2000);

        // Set random characters to confuse users
        const generateRandomChars = () => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789(){}[],"\' ;:.';
            let result = '';
            for (let i = 0; i < 100; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            setRandomChars(result);
        };

        generateRandomChars(); // Generate random characters on component mount

        return () => {
            clearInterval(countdown);
            clearInterval(quoteInterval);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-pulse">🚨 ERROR 503: KETERANGAN MISTERIUS 🚨</h1>
            <p className="text-lg mb-2">Kami tidak tahu bagaimana kamu sampai di sini...</p>
            <p className="text-lg mb-6">Ini adalah kesalahan yang tidak bisa diatasi!</p>
            <div className="random-elements text-center mb-8">
                <p className="text-xl">🌀 Menghitung mundur... <span id="countdown" className="font-bold">{count}</span></p>
                <p className="text-lg">📡 Menghubungkan ke server yang tidak ada...</p>
                <p className="text-lg">🤖 Menjalankan kode yang tidak pernah ada!</p>
                <p className="text-lg font-italic">{randomQuote}</p>
                <pre className="random-chars mt-4 bg-gray-900 p-2 rounded">{randomChars}</pre>
            </div>
            <div className="confusing-animation">
                <div className="glitch"></div>
                <div className="spinner animate-spin border-t-4 border-blue-600 rounded-full w-12 h-12"></div>
            </div>
            <button 
                onClick={() => window.location.reload()}
                className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition duration-300"
            >
                Coba Lagi
            </button>
        </div>
    );
};

export default UltimateErrorPage;
