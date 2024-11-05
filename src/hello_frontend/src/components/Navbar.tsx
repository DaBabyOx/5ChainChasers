import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <main>
      <header className="bg-black shadow">
        <div className="container mx-auto flex items-center justify-between p-2">
          <div className="flex items-center justify-center space-x-4">
            <button onClick={() => navigate('/home')}>
              <svg id="logo-35" width="40" height="29" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
                <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path>
              </svg>
            </button>
            {/* <h1 className="text-xl font-semibold text-white">5CC</h1> */}
          </div>
          <div className="flex flex-grow px-3 max-w-lg space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-sm p-1 px-4 border-none rounded-full bg-neutral-900/50 text-white focus:outline-none "
            />
            <div className="flex space-x-2">
              <button
                onClick={() => navigate('/category')}
                className="p-1 text-sm font-normal bg-neutral-900/50 hover:bg-neutral-950/50 rounded-full py-1 px-3 text-white/70 hover:text-white transition-all duration-300"
              >
                <p>Explore</p>
              </button>
              <button
                onClick={() => navigate('/collections')}
                className="p-1 text-sm font-normal bg-neutral-900/50 hover:bg-neutral-950/50 rounded-full py-1 px-3 text-white/70 hover:text-white transition-all duration-300"
              >
                <p>Collection</p>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex items-center justify-center space-x-4">
              <button className="p-2 text-white/70 hover:text-gray-400 transition-all duration-300">
                <IoMdNotificationsOutline size={25} />
              </button>
              <button className="p-2 text-white/70 hover:text-gray-400 transition-all duration-300">
                <FaRegUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Navbar;
