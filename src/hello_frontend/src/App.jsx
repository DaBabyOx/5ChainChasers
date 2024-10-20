import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';
import './index.css';

function App() {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState(''); // Store name in state
  const [error, setError] = useState(''); // Handle any potential errors

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!name.trim()) {
      setError('Name cannot be empty!');
      return;
    }

    try {
      const greetingResponse = await hello_backend.greet(name);
      setGreeting(greetingResponse);
      setError(''); // Clear error if successful
    } catch (err) {
      setError('Failed to fetch greeting. Please try again.');
      console.error(err); // Log the error for debugging purposes
    }
  };

  return (
    <main className="min-h-screen bg-blue-700 text-white flex flex-col items-center justify-center p-6">
      <img src="/logo2.svg" alt="DFINITY logo" className="mb-8" />
      
      <form className="bg-blue-700 space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <label className="block text-2xl font-bold" htmlFor="name">Enter your name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your name"
          aria-label="Enter your name"
        />
        
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-white text-blue-700 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
        >
          Click Me
        </button>
      </form>

      <section id="greeting" className="mt-8 text-xl">
        {greeting && <p>{greeting}</p>}
      </section>
    </main>
  );
}

export default App;
