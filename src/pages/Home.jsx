import SwiperHome from '../components/Swiper';
import styles from '../style';
const home = () => (
  <div className={`${styles.flexCenter}  w-full flex-col   `}>
    <SwiperHome />
    <p>home</p>
  </div>
);

export default home;
