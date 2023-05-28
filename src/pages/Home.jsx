import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';
import SwiperHome from '../components/Swiper.jsx';
import styles from '../style.js';
const home = () => (
  <div className={`${styles.flexCenter} w-full flex-col `}>
    <SwiperHome />
    <section
      className={`${styles.boxWidth} py-6 px-5 flex flex-col justify-center gap-3`}
    >
      <Cards />
    </section>
    <Footer />
  </div>
);

export default home;
