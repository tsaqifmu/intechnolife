import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import styles from './style';

const App = () => {
  return (
    <div className="w-full">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-slate-200 font-jakarta`}
      >
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
