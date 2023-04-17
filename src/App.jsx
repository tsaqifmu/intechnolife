import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import styles from './style';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={` ${styles.flexCenter} bg-white `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
