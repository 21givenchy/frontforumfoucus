import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginTop: '40px' }}>FrontForumFocus</h1>
      <p style={{ textAlign: 'center', fontSize: '20px', lineHeight: '1.5', marginBottom: '40px' }}>
        A platform connecting individuals and organizations working on sustainable development goals through community initiatives, marketplace, and educational resources
      </p>
      <button style={{ display: 'block', margin: '0 auto', fontSize: '20px', padding: '10px 20px', borderRadius: '8px', backgroundColor: '#0070f3', color: '#fff', border: 'none' }}>
        Get Started
      </button>
    </>
  );
};

export default HomePage;
