import React from 'react';

import './homepage.styles.scss';

import '../../components/menu-item/menu-item.component';
import Directory from '../directory/directory.component';

const HomePage = () => (
  <div className='home-page'>
    <Directory />
  </div>
)

export default HomePage;