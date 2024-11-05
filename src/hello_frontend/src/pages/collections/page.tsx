import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

// Data structure for the images
interface ImageData {
  id: string;
  date: string;
  license: string;
  size: string;
  imageUrl: string;
}

// Example images from Unsplash
const images: ImageData[] = [
  {
    id: '1',
    date: '28/08/2024',
    license: 'Standard license',
    size: 'Large (jpg)',
    imageUrl: 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=300&h=200&fit=crop&q=80',
  },
  {
    id: '2',
    date: '28/08/2024',
    license: 'Standard license',
    size: 'Small (jpg)',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop&q=80',
  },
  {
    id: '3',
    date: '28/08/2024',
    license: 'Standard license',
    size: 'Medium (jpg)',
    imageUrl: 'https://th.bing.com/th/id/R.b1e48c9bc567258d2a8aef589a639b5f?rik=F0m1ZUrcZs2NqA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1534142499731-a32a99935397%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=Yq5DlDaGqivuCaLmJTlTC7OTZrLJnf2hnJLsZrz32xw%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: '4',
    date: '28/07/2024',
    license: 'Standard license',
    size: 'Large (jpg)',
    imageUrl: 'https://images.unsplash.com/photo-1528953581630-1f4d3a4cb3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2OTcxNjU5NTg&ixlib=rb-4.0.3&q=80&w=400',
  },
  {
    id: '5',
    date: '28/07/2024',
    license: 'Standard license',
    size: 'Large (jpg)',
    imageUrl: 'https://images.unsplash.com/photo-1560266832-d77c50eb6d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFuaW1hbHxlbnwwfHx8fDE2OTcxNjU5NTg&ixlib=rb-4.0.3&q=80&w=400',
  },
];

const ImageGalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'licenses' | 'saved'>('licenses');

  return (
    <>
      <Navbar />
      <main className="max-w-4xl md:max-w-5xl lg:max-w-7xl flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-bold mt-10 mb-2 text-center text-white">Collections</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-28 text-center mb-6 border-b border-neutral-800">
          <div
            className={`cursor-pointer px-6 pb-2 ${activeTab === 'licenses' ? 'text-white border-b-2 border-red-600 transition duration-300' : 'text-neutral-700'
              }`}
            onClick={() => setActiveTab('licenses')}
          >
            Licenses
          </div>
          <div
            className={`cursor-pointer pb-2 px-6 ${activeTab === 'saved' ? 'text-white border-b-2 border-red-600 transition duration-300' : 'text-neutral-700'
              }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved
          </div>
        </div>

        {/* Content based on activeTab */}
        {activeTab === 'licenses' ? (
          <div className="space-y-16 py-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex flex-row items-center gap-16 justify-center shadow-lg rounded-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={image.imageUrl}
                  alt={image.id}
                  className="w-64 h-48 bg-white object-cover rounded-lg"
                />
                <div className="flex flex-col items-start justify-center">
                  <h2 className="font-semibold text-white text-lg text-center">{image.id}</h2>
                  <p className="text-sm text-neutral-400 text-center">{image.date}</p>
                  <p className="text-base font-semibold text-neutral-600 text-center">{image.license}</p>
                  <p className="text-sm text-neutral-600 text-center">{image.size}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="shadow-lg space-y-4 rounded-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={image.imageUrl}
                  alt={image.id}
                  className="w-64 h-48 bg-white rounded-lg object-cover"
                />
                <div className="flex flex-col items-start justify-center">
                  {/* <h2 className="font-semibold text-white text-lg text-center">{image.id}</h2> */}
                  <p className="text-base font-semibold text-neutral-200 text-center">{image.license}</p>
                  <p className="text-sm text-neutral-500 text-center">{image.date}</p>
                  {/* <p className="text-sm text-gray-700 text-center">{image.size}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default ImageGalleryPage;
