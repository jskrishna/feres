// pages/index.js
import MainLayout from '../components/MainLayout';
import Header from '../components/Header';
import ExploreSection from '../components/ExploreSection';
import SpecialOffers from '../components/SpecialOffers';
import TopRatedRestaurants from '../components/TopRatedRestaurants';
import CategoryMenu from '../components/CategoryMenu';

const HomePage = () => {
  return (
    <MainLayout>
      Hello
      <Header />
      <ExploreSection />
      <SpecialOffers />
      <TopRatedRestaurants />
    </MainLayout>
  );
};

export default HomePage;
