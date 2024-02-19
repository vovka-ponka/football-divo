import styles from './app.module.scss';
import logo from './assets/image/logo.png';
import { Routes, Route } from 'react-router-dom';
import Comand from './components/Comand/Comand.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Cabinet from './components/Cabinet/Cabinet.jsx';
import Infrastructure from './components/Infrastructure/Infrastructure.jsx';
import Finance from './components/Finance/Finance.jsx';
import Plane from './components/Plane/Plane.jsx';
import Schedule from './components/Schedule/Schedule.jsx';
import Email from './components/Email/Email.jsx';
import Transfers from './components/Transfers/Transfers.jsx';
import Campionship from './components/Campionship/Campionship.jsx';
import Player from './components/Player/Player';
import Game from './components/Game/Game';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img width="300" height="300" src={logo} alt="football logo" />
      </div>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/comand" element={<Comand />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/plane" element={<Plane />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/email" element={<Email />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/championship" element={<Campionship />} />
          <Route path="/player" element={<Player />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
