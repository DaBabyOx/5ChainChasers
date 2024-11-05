import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

// Helper function to render items for the carousel
const renderCarouselItems = (prefix: string) => {
  const images = [
    "https://images.unsplash.com/photo-1730386303306-86ff501693e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1730599615689-9598469712fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1730259692163-e2cf3d547aab",
    "https://images.unsplash.com/photo-1725370569259-b7f67699ecb0",
    "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43"
  ];

  return images.map((url, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-48 shadow-md rounded-lg overflow-hidden mx-2 transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={url}
        alt={`${prefix} ${index + 1}`}
        className="w-48 h-72 object-cover rounded-lg"
      />
      <div className="p-2">
        <h3 className="text-sm font-medium text-white">{`${prefix} ${index + 1}`}</h3>
      </div>
    </div>
  ));
};

const renderRecommendationItems = () => {
  const recommendationImages = [
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1345&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1730386303306-86ff501693e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1730599615689-9598469712fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1730259692163-e2cf3d547aab",
    "https://images.unsplash.com/photo-1725370569259-b7f67699ecb0",
    "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43"
  ];

  return recommendationImages.map((url, index) => (
    <div
      key={index}
      className={`shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
        index % 2 === 0 ? "h-56" : "h-72"
      }`}
    >
      <img
        src={url}
        alt={`Recommendation ${index + 1}`}
        className="w-full h-full object-cover"
        style={{
          minHeight: '100%',
          minWidth: '100%',
        }}
      />
    </div>
  ));
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(120deg, black, black 70%, #0000ff)',
        backgroundSize: '300% 300%',
        animation: 'gradientAnimation 8s ease infinite',
        color: 'white',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Hide scrollbar on iPad and small devices */
          @media (max-width: 768px) {
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;  /* Safari and Chrome */
            }
          }
        `}
      </style>

      <Navbar />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-8">
          Welcome to Your Pinterest-like Dashboard
        </h1>

        <div className="space-y-10">
          {/* Recently Viewed Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
            <div className="flex overflow-x-auto p-2 scrollbar-hide items-center justify-center">
              {renderCarouselItems('Item')}
            </div>
          </div>

          {/* Highlight of the Month Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Highlight of the Month</h2>
            <div className="flex overflow-x-auto items-center justify-center p-2 scrollbar-hide">
              {renderCarouselItems('Highlight')}
            </div>
          </div>

          {/* Recommendations for You Section */}
          <div>
            {/* Remove Recommendation Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderRecommendationItems()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
