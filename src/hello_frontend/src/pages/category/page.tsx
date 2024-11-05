import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

// Updated category data with reliable Unsplash image URLs
const categories = [
  { id: 1, name: 'Nature', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop&q=80' },
  { id: 2, name: 'Technology', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&q=80' },
  { id: 3, name: 'Art', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop&q=80' },
  { id: 4, name: 'Travel', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop&q=80' },
  { id: 5, name: 'Food', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop&q=80' },
  { id: 6, name: 'Animals', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200&fit=crop&q=80' },
  { id: 7, name: 'Sports', image: 'https://images.unsplash.com/photo-1599058917211-6d5cb818d20e?w=300&h=200&fit=crop&q=80' },
  { id: 8, name: 'Fashion', image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=300&h=200&fit=crop&q=80' },
];

const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    // Navigate to the category-specific page
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="container mx-auto p-6 -mt-6 flex flex-col space-y-6">
      <h1 className="text-3xl font-bold mt-10 mb-2 text-center text-white">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white shadow-md rounded-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 duration-300"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0">
                <h2 className="text-white text-lg font-semibold">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
