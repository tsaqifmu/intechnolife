import Cards from '../components/Cards';
import Footer from '../components/Footer';
import SwiperHome from '../components/Swiper';
import styles from '../style';
const home = () => (
  <div className={`${styles.flexCenter} w-full flex-col `}>
    <SwiperHome />
    <Cards />
    <Footer />
  </div>
);

export default home;
