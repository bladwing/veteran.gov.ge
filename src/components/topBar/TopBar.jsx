import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


import SocialMediaLinks from '../socMedia/SocMedia';

const TopBar = () => {
  return (
    <div style={{ backgroundColor: '#183650', color: '#fff', padding: '10px', display: 'flex', alignItems: 'center',  justifyContent: 'space-between'}}>
      <div style={{ marginRight: '40px' }}>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
        <span>2 48 16 26</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
        <span>info@veterans.gov.ge</span>
      </div>
      <SocialMediaLinks/>
    </div>
  );
};

export default TopBar;
