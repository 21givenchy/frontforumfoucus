import React from 'react';
import Image from 'next/image';


const HomePage: React.FC = () => {
  
  return (
    <>
        <nav className="flex justify-between items-center py-6 px-10">
        <div className="logo">
          <Image src="/logo.png" alt="frontforumfocus" width={100} height={100} />
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <a href="#" className="text-lg font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200">Community Initiatives</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-lg font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200">Marketplace</a>
          </li>
          <li>
            <a href="#" className="text-lg font-bold text-gray-600 hover:text-gray-900 transition-colors duration-200">Educational Resources</a>
          </li>
        </ul>
      </nav> 

    

    <h1 className="text-5xl font-bold text-center mt-20">frontforumfocus</h1>
<p className="text-center text-lg leading-7 mb-20">
  A platform connecting individuals and organizations working on sustainable development goals through  community initiatives, marketplace, and educational resources
</p>

      <div className="home-page-features flex flex-wrap justify-center items-center gap-6 py-10">
  <div className="home-page-feature max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Community Initiatives</h2>
    <p className="text-gray-600 text-lg">Join a community of individuals and organizations working towards sustainable development goals.</p>
  </div>
  <div className="home-page-feature max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
    <p className="text-gray-600 text-lg">Discover and purchase sustainable products and services from verified sellers.</p>
  </div>
  <div className="home-page-feature max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Educational Resources</h2>
    <p className="text-gray-600 text-lg">Access a range of educational resources on sustainable development goals and best practices.</p>
  </div>
</div>
      <button
        style={{display: 'block',margin: '0 auto',fontSize: '20px',padding: '10px 20px',borderRadius: '8px',backgroundColor: '#0070f3',color: '#fff',border: 'none'
        }}
     
      >
        Join Our Community
      </button>
    </>
  );
};

export default HomePage;