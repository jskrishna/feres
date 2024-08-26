// pages/index.js
import MainLayout from '../components/MainLayout';
import Header from '../components/Header';
import ExploreSection from '../components/ExploreSection';
import SpecialOffers from '../components/SpecialOffers';
import TopRatedRestaurants from '../components/TopRatedRestaurants';
import CategoryMenu from '../components/CategoryMenu';
import BottomNavigation from '../components/BottomNavigation';
import MenuSelection from '../components/MenuSelection';

const HomePage = () => {
  return (
    <MainLayout>
      <Header />
      <div>
        <ExploreSection />
        <SpecialOffers />
        <TopRatedRestaurants />
        {/* <CategoryMenu /> */}
        {/* <MenuSelection /> */}
        <BottomNavigation />
      </div>
    </MainLayout>
  );
};

export default HomePage;
