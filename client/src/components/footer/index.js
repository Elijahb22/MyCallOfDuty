import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        &copy; {new Date().getFullYear()} Elijah Busick  
      </div>
    </footer>
  );
};

export default Footer;