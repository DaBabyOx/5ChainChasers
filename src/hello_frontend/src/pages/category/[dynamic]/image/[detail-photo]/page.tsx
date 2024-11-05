import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { imageMap, Image } from '../../../../../utils/category-data'; // Adjust the import path as necessary
import PaymentModal from '../../../../../components/PaymentModal'; // Adjust the import path for the PaymentModal
import Navbar from '../../../../../components/Navbar';

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const image = findImageById(id ?? '');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ label: string; price: number } | null>(null);

  if (!image) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-300 bg-black">
        Image not found
      </div>
    );
  }

  const handlePaymentSubmit = async (method: string): Promise<void> => {
    // Here you would implement the payment logic, 
    // potentially calling the Motoko smart contract
    console.log("Payment submitted with method:", method);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
  };

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen p-6 flex justify-center items-center">
        <div className="max-w-4xl w-full bg-neutral-950 rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:shadow-2xl text-white">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <img
              src={image.url}
              className="w-full h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Options Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-neutral-300 mb-4">Purchase Options:</h3>
            <div className="space-y-2">
              {[
                { label: 'Single Image', index: 0 },
                { label: '2 Image Pack', index: 1 },
                { label: '5 Image Pack', index: 2 },
              ].map((option) => (
                <button
                  key={option.label}
                  onClick={() => {
                    setSelectedOption({ label: option.label, price: (option.index + 1) * 10000000 }); // Dummy price logic
                    setIsModalOpen(true);
                  }}
                  className="w-full flex justify-between items-center border border-neutral-700 rounded-lg p-3 transition duration-300 bg-neutral-950 hover:bg-neutral-700 text-neutral-300"
                >
                  <span className="text-base font-medium">{option.label}</span>
                  <span className="font-semibold text-white">{`${(option.index + 1) * 0.05} ICP`}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pay Button */}
          {selectedOption && (
            <div className="mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-900 text-blue-100 rounded-lg py-3 font-semibold hover:bg-blue-950 transition duration-300"
              >
                Pay for {selectedOption.label}
              </button>
            </div>
          )}

          {/* Payment Modal */}
          <div className="transition-all duration-300">
            <PaymentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onPaymentSubmit={handlePaymentSubmit}
            />
          </div>

          {/* Similar Images Section */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-neutral-300 mb-4">Similar Images:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getSimilarImages(image).map((similarImage) => (
                <div
                  key={similarImage.id}
                  className="relative overflow-hidden rounded-lg bg-neutral-800 shadow-sm hover:shadow-lg transition transform duration-300 hover:scale-105"
                >
                  <img
                    src={similarImage.url}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

// Helper function to find an image by ID
const findImageById = (id: string): Image | undefined => {
  for (const category in imageMap) {
    const found = imageMap[category].find((image) => image.id === id);
    if (found) return found;
  }
  return undefined;
};

// Function to get similar images
const getSimilarImages = (currentImage: Image): Image[] => {
  const category = Object.keys(imageMap).find((cat) =>
    imageMap[cat].some((image) => image.id === currentImage.id)
  );
  return category ? imageMap[category].filter((img) => img.id !== currentImage.id) : [];
};

export default ImageDetail;
