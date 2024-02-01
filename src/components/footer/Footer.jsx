import React from 'react';
import SocialMediaLinks from '../socMedia/SocMedia';

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: '#183650'}}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img src="img/footer_logo.png" alt="Logo" className="logo" style={{width: "60px", height: "60px"}} />
        </div>
        <div>
          <p className="mb-0">Copyright &copy; 2024 ვეტერანების საქმეთა სახელმწიფო სამსახური.</p>
        </div>
       <SocialMediaLinks/>
      </div>
    </footer>
  );
};

export default Footer;
