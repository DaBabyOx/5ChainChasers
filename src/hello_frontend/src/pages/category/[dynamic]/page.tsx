import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageMap, Image } from '../../../utils/category-data'; // Ensure the path is correct
import Navbar from '../../../components/Navbar';

const CategoryDetails: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the images for the specific category
    const selectedImages = categoryName && imageMap[categoryName] ? imageMap[categoryName] : [];
    setImages(selectedImages);
    setLoading(false);
  }, [categoryName]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
        {images.map((image) => (
          <Link key={image.id} to={`/image/${image.id}`}>
            <div className="relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={image.url}
                alt=""
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default CategoryDetails;
