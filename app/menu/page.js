// app/menu/page.js

import React from 'react';
import MainLayout from '../../components/MainLayout';
import MenuSelection from '../../components/MenuSelection';
import BottomNavigation from '../../components/BottomNavigation';

const MenuPage = () => {
  return (
    <MainLayout>
      <MenuSelection />
      <BottomNavigation />
    </MainLayout>
  );
};

export default MenuPage;
