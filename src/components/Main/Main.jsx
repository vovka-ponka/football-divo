import React from 'react';
import styles from './main.module.scss';
import pochtaBlue from '../../assets/image/pochta-blue.png';
import pochtaRed from '../../assets/image/pochta-red.png';
import pochtaGreen from '../../assets/image/pochta-green.png';
import kubki from '../../assets/image/kubki.png';
import nagrad from '../../assets/image/nagrad.png';
import rating from '../../assets/image/rating.png';
import logoComand from '../../assets/image/clubs/14095.png';
import yellow4 from '../../assets/image/yellow4.png';
import yellow1 from '../../assets/image/yellow1.png';
import yellow2 from '../../assets/image/yellow2.png';
import red from '../../assets/image/red.png';
import bad from '../../assets/image/bad.png';
import good from '../../assets/image/good.png';
import notbad from '../../assets/image/notbad.png';
import notgood from '../../assets/image/notgood.png';
import sbornik from '../../assets/image/sbornik.png';
import travma from '../../assets/image/travma.png';
import ua from '../../assets/image/flags/ua.png';
import it from '../../assets/image/flags/it.png';
import ng from '../../assets/image/flags/ng.png';
import ht from '../../assets/image/flags/ht.png';
import za from '../../assets/image/flags/za.png';
import { Link } from 'react-router-dom';
import field from '../../assets/image/field.jpg';

import './main.scss';

function Main() {
  // Направлення атак початок
  const [isActiveAttackDirectionOne, setIsActiveAttackDirectionOne] = React.useState(false);
  const [isActiveAttackDirectionTwo, setIsActiveAttackDirectionTwo] = React.useState(false);
  const [isActiveAttackDirectionTree, setIsActiveAttackDirectionTree] = React.useState(false);
  const handleAttackDirectionOne = () => {
    setIsActiveAttackDirectionOne(!isActiveAttackDirectionOne);
    if (isActiveAttackDirectionOne === true) {
      setIsActiveAttackDirectionTwo(isActiveAttackDirectionTwo);
      setIsActiveAttackDirectionTree(isActiveAttackDirectionTree);
    } else {
      setIsActiveAttackDirectionTwo(isActiveAttackDirectionTwo);
      setIsActiveAttackDirectionTree(isActiveAttackDirectionTree);
    }
  };
  const handleAttackDirectionTwo = () => {
    setIsActiveAttackDirectionTwo(!isActiveAttackDirectionTwo);
    if (isActiveAttackDirectionTwo === true) {
      setIsActiveAttackDirectionOne(isActiveAttackDirectionOne);
      setIsActiveAttackDirectionTree(isActiveAttackDirectionTree);
    } else {
      setIsActiveAttackDirectionOne(isActiveAttackDirectionOne);
      setIsActiveAttackDirectionTree(isActiveAttackDirectionTree);
    }
  };
  const handleAttackDirectionTree = () => {
    setIsActiveAttackDirectionTree(!isActiveAttackDirectionTree);
    if (isActiveAttackDirectionTree === true) {
      setIsActiveAttackDirectionTwo(isActiveAttackDirectionTwo);
      setIsActiveAttackDirectionOne(isActiveAttackDirectionOne);
    } else {
      setIsActiveAttackDirectionOne(isActiveAttackDirectionOne);
      setIsActiveAttackDirectionTwo(isActiveAttackDirectionTwo);
    }
  };
  // Направлення атак кінець

  // 3 штуки 1 вибір початок
  const [isActiveProtectionLineOne, setIsActiveProtectionLineOne] = React.useState(false);
  const [isActiveProtectionLineTwo, setIsActiveProtectionLineTwo] = React.useState(false);
  const [isActiveProtectionLineTree, setIsActiveProtectionLineTree] = React.useState(false);

  const handleProtectionLineOne = () => {
    setIsActiveProtectionLineOne(!isActiveProtectionLineOne);
    if (isActiveProtectionLineOne === true) {
      setIsActiveProtectionLineTwo(false);
      setIsActiveProtectionLineTree(false);
    } else {
      setIsActiveProtectionLineTwo(false);
      setIsActiveProtectionLineTree(false);
    }
  };
  const handleProtectionLineTwo = () => {
    setIsActiveProtectionLineTwo(!isActiveProtectionLineTwo);
    if (isActiveProtectionLineTwo === true) {
      setIsActiveProtectionLineOne(false);
      setIsActiveProtectionLineTree(false);
    } else {
      setIsActiveProtectionLineOne(false);
      setIsActiveProtectionLineTree(false);
    }
  };
  const handleProtectionLineTree = () => {
    setIsActiveProtectionLineTree(!isActiveProtectionLineTree);
    if (isActiveProtectionLineTree === true) {
      setIsActiveProtectionLineTwo(false);
      setIsActiveProtectionLineOne(false);
    } else {
      setIsActiveProtectionLineTwo(false);
      setIsActiveProtectionLineOne(false);
    }
  };
  // 3 штуки 1 вибір кінець

  const [isActive, setActive] = React.useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const [isActivePl, setActivePl] = React.useState(false);
  const [isActiveDr, setActiveDr] = React.useState(false);
  const [isActiveZb, setActiveZb] = React.useState(false);
  const [isActivePo, setActivePo] = React.useState(false);
  const [isActiveUgl, setActiveUgl] = React.useState(false);
  const [isActivePen, setActivePen] = React.useState(false);
  const [isActiveSht, setActiveSht] = React.useState(false);
  const [isActiveCap, setActiveCap] = React.useState(false);
  const [isActivePr, setActivePr] = React.useState(false);
  const handleTogglePl = () => {
    setActivePl(!isActivePl);
  };
  const handleToggleDr = () => {
    setActiveDr(!isActiveDr);
  };
  const handleToggleZb = () => {
    setActiveZb(!isActiveZb);
  };
  const handleTogglePo = () => {
    setActivePo(!isActivePo);
  };
  const handleToggleUgl = () => {
    setActiveUgl(!isActiveUgl);
  };
  const handleTogglePen = () => {
    setActivePen(!isActivePen);
  };
  const handleToggleSht = () => {
    setActiveSht(!isActiveSht);
  };
  const handleToggleCap = () => {
    setActiveCap(!isActiveCap);
  };
  const handleTogglePr = () => {
    setActivePr(!isActivePr);
  };

  return (
    <div className={styles.grid}>
      <div className={styles.menu_left}>
        <div className={styles.mail_game}>
          <ul>
            <li>
              <Link to="/email">
                <img width="40" height="40" src={pochtaBlue} alt="pochta-blue" />
              </Link>
            </li>
            <li>
              <Link to="/email">
                <img width="40" height="40" src={pochtaRed} alt="pochta-red" />
              </Link>
            </li>
            <li>
              <Link to="/email">
                <img width="40" height="40" src={pochtaGreen} alt="pochta-green" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.team}>
          <Link to="/comand">
            <img width="90" height="90" src={logoComand} alt="logo comand" />
          </Link>
        </div>
        <div className={styles.awards}>
          <ul>
            <li>
              <Link to="/cabinet">
                <img width="30" height="30" src={rating} alt="rating" />
              </Link>
            </li>
            <li>
              <Link to="/cabinet">
                <img width="30" height="30" src={kubki} alt="kubki" />
              </Link>
            </li>
            <li>
              <Link to="/cabinet">
                <img width="30" height="30" src={nagrad} alt="nagrad" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.trainer_exchange}>
          <p>Біржа найму гол тр.</p>
          <ul>
            <li>
              <Link to="/">Атлетіко Мадрид</Link>
            </li>
            <li>
              <Link to="/">Карпати</Link>
            </li>
            <li>
              <Link to="/">...</Link>
            </li>
          </ul>
        </div>
        <div className={styles.management}>
          <a href="#">Керівництво клубу</a>
        </div>
        <div className={styles.latest_results}></div>
      </div>

      <div className={styles.menu_center}>
        <div className={styles.roster_table}>
          <div className={styles.roster_and_team_strength}>
            <div>Ростер</div>
            <div>1472</div>
          </div>
          <div className={styles.roster_title}>
            <div>№</div>
            <div>Призвище та ім'я</div>
            <div>Країна</div>
            <div></div>
            <div>Позиція</div>
            <div>Вік</div>
            <div>Тал.</div>
            <div>Скілл</div>
            <div>Форма</div>
            <div>Мораль</div>
          </div>
          <div className={styles.roster_name}>
            <div>1</div>
            <div className={styles.name}>
              {' '}
              <Link to="/player"> Колісник Андрій</Link>
            </div>
            <div>
              <img width="20" height="15" src={ua} alt="Україна" />
            </div>
            <div>
              <img src={yellow4} alt="yellow4" />
            </div>
            <div>GK</div>
            <div>25</div>
            <div>4</div>
            <div>135</div>
            <div>75%</div>
            <div>
              <img width="20" height="20" src={notgood} alt="notgood" />
            </div>
          </div>
          <div className={styles.roster_name}>
            <div>23</div>
            <div className={styles.name}>Емануель Луіс </div>
            <div>
              <img width="20" height="15" src={ht} alt="Гаіті" />
            </div>
            <div>
              <img src={red} alt="red" />
            </div>
            <div>ST</div>
            <div>33</div>
            <div>2</div>
            <div>99</div>
            <div>5%</div>
            <div>
              <img width="20" height="20" src={good} alt="good" />
            </div>
          </div>
          <div className={styles.roster_name}>
            <div>87</div>
            <div className={styles.name}>Мофокенг Табо </div>
            <div>
              <img width="20" height="15" src={za} alt="ЮАР" />
            </div>
            <div>
              <img width="20" height="20" src={sbornik} alt="sbornik" />
            </div>
            <div>LM</div>
            <div>16</div>
            <div>1</div>
            <div>150</div>
            <div>100%</div>
            <div>
              <img width="20" height="20" src={notbad} alt="notbad" />
            </div>
          </div>
          <div className={styles.roster_name}>
            <div>39</div>
            <div className={styles.name}>Абубакар Накамавенга </div>
            <div>
              <img width="20" height="15" src={ng} alt="Нігерія" />
            </div>
            <div>
              <img width="20" height="20" src={travma} alt="travma" />
            </div>
            <div>DM</div>
            <div>16</div>
            <div>1</div>
            <div>150</div>
            <div>93%</div>
            <div>
              <img width="20" height="20" src={bad} alt="bad" />
            </div>
          </div>
          <div className={styles.roster_name}>
            <div>11</div>
            <div className={styles.name}>Хуан Альварес</div>
            <div>
              <img width="20" height="15" src={it} alt="Італія" />
            </div>
            <div>
              <img src={yellow2} alt="yellow2" />
            </div>
            <div>CD</div>
            <div>22</div>
            <div>6</div>
            <div>120</div>
            <div>65%</div>
            <div>
              <img width="20" height="20" src={notgood} alt="notgood" />
            </div>
          </div>
        </div>
        <div className={styles.team_data}>
          <div className={styles.forward_department}>
            <div className={styles.forward_title}>Бомбардири</div>
            <div className={styles.table_team_data}>
              <div className={styles.forward}>
                <div>1</div>
                <div className={styles.forward_two}>Миколенко Михайло</div>
                <div>35</div>
              </div>
              <div className={styles.forward}>
                <div>2</div>
                <div className={styles.forward_two}>Даламіан Долбатко</div>
                <div>8</div>
              </div>
            </div>
          </div>

          <div className={styles.forward_department}>
            <div className={styles.forward_title}>Асистенти</div>
            <div className={styles.table_team_data}>
              <div className={styles.forward}>
                <div>1</div>
                <div className={styles.forward_two}>Мирославський Микита</div>
                <div>5</div>
              </div>
              <div className={styles.forward}>
                <div>2</div>
                <div className={styles.forward_two}>Абдуларіхієв Азазад</div>
                <div>4</div>
              </div>
            </div>
          </div>
          <div className={styles.forward_department}>
            <div className={styles.forward_title}>Трамви гравців</div>
            <div className={styles.table_team_data}>
              <div className={styles.forward}>
                <div className={styles.forward_name_damage}>Ліан Нельсон</div>
                <div>меніск</div>
                <div className={styles.forward_name_damage_last}>12.02.2025</div>
              </div>
              <div className={styles.forward}>
                <div className={styles.forward_name_damage}>Антуан Грізман</div>
                <div>коліно</div>
                <div className={styles.forward_name_damage_last}>12.02.2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menu_right}>
        <div className={styles.matches}>
          <div className={styles.matches_title}>Найближчі матчі</div>
          <div className={styles.matches_one}>
            <div className={styles.matches_data_and_name}>
              <span>УКРАЇНА. БЕСТ ЛІГА</span>
              <div>19.02.2023 21 тур</div>
            </div>
            <div className={styles.teams}>
              <div>22:00</div>
              <div>Рух</div>
              <div className={styles.teams_score_no_game}>
                <a href="#">-:-</a>
              </div>
              <div>Замфара Юнд.</div>
            </div>
          </div>
          <div className={styles.matches_one}>
            <div className={styles.matches_data_and_name}>
              <span>УКРАЇНА. БЕСТ ЛІГА</span>
              <div>19.02.2023 21 тур</div>
            </div>
            <div className={styles.teams}>
              <div className={styles.teams_time}>22:00</div>
              <div className={styles.teams_one}>Манчестер Юнд.</div>
              <div className={styles.teams_score_no_game}>
                <a href="#">-:-</a>
              </div>
              <div className={styles.teams_two}>Замфара Юнд.</div>
            </div>
          </div>
          <div className={styles.matches_one}>
            <div className={styles.matches_data_and_name}>
              <span>УКРАЇНА. БЕСТ ЛІГА</span>
              <div>19.02.2023 21 тур</div>
            </div>
            <div className={styles.teams}>
              <div>22:00</div>
              <div>Замфара Юнд.</div>
              <div className={styles.teams_score_no_game}>
                <a href="#">-:-</a>
              </div>
              <div>Шахтар</div>
            </div>
          </div>
        </div>
        <div className={styles.management}>
          <a href="#">Помічник тренера</a>
        </div>
        <div className={styles.management}>
          <a href="#">Скаут</a>
        </div>
        <div className={styles.management}>
          <a href="#">Медична служба</a>
        </div>
        <div className={styles.management}>
          <a href="#">Фізіотерапевт</a>
        </div>
        <div className={styles.management}>
          <a href="#">Психолог</a>
        </div>
      </div>

      <div className={styles.tactic_title}>
        <div className={styles.tactic_title_name}>Склад та тактика на наступний матч</div>
        <div className={styles.tactic_two_buttons}>
          <div className={styles.tactic_select}>
            <select name="select">
              <option value="value1" defaultValue>
                Вибрати схему
              </option>
              <option value="value2">3-5-2</option>
              <option value="value3">4-4-2</option>
              <option value="value4">4-3-3</option>
            </select>
          </div>
          <div className={styles.tactic_button}>
            <button name="match" type="button">
              Зберегти налаштування на матч
            </button>
          </div>
        </div>

        <div className={styles.tactic_block}>
          <div>
            <img width="354" height="500" src={field} alt="field" />
          </div>

          <div className={styles.tactic_block_another}>
            <div>Захист</div>
            <div>
              <div className={styles.protection_name}>Висота лінії захисту</div>
              <div className={styles.protection_name_flex}>
                <div
                  onClick={handleProtectionLineOne}
                  className={isActiveProtectionLineOne ? 'active2' : ''}>
                  Низька
                </div>
                <div
                  onClick={handleProtectionLineTwo}
                  className={isActiveProtectionLineTwo ? 'active2' : ''}>
                  Середня
                </div>
                <div
                  onClick={handleProtectionLineTree}
                  className={isActiveProtectionLineTree ? 'active2' : ''}>
                  Висока
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Висота прессингу</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Низька
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середня
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Висока
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Ширина захисту</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Вузька
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середня
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Широка
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Інтенсивність прессингу</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Мін
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Низька
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середня
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Висока
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Макс
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tactic_block_another}>
            <div>Передачі</div>
            <div>
              <div className={styles.protection_name}>Стиль гри</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Зах+
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Захист
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середній
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Атака
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Атак+
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Напрямок атак</div>
              <div className={styles.protection_name_flex}>
                <div
                  onClick={handleAttackDirectionOne}
                  className={isActiveAttackDirectionOne ? 'active2' : ''}>
                  Зліва
                </div>
                <div
                  onClick={handleAttackDirectionTwo}
                  className={isActiveAttackDirectionTwo ? 'active2' : ''}>
                  Центр
                </div>
                <div
                  onClick={handleAttackDirectionTree}
                  className={isActiveAttackDirectionTree ? 'active2' : ''}>
                  Зправа
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tactic_block_another}>
            <div>Атака</div>
            <div>
              <div className={styles.protection_name}>Гострота пасу</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Низька
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середня
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Висока
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Пас в один дотик</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Низько
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середне
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Високо
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Дриблінг</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Мін
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Помірно
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середне
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Часто
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Макс
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Дальні удари</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Мін
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Помірно
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Макс
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Темп гри</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Низький
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Середній
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Високий
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Вихід з оборони</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Виноси
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Змішаний
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Позиційний
                </div>
              </div>
            </div>
            <div>
              <div className={styles.protection_name}>Верхові передачі</div>
              <div className={styles.protection_name_flex}>
                <div onClick={handleToggle} className={'active2' + isActive ? 'active2' : ''}>
                  Рідко
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Помірно
                </div>
                <div onClick={handleToggle} className={isActive ? 'active2' : ''}>
                  Часто
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tactic_title}>
        <div className={styles.tactic_title_name}>Персональні налаштування для гравців</div>
        <div className={styles.tactic_squad}>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleTogglePl} className={isActivePl ? 'active2' : 'position'}>
              Пл.
            </div>
            <div onClick={handleToggleDr} className={isActiveDr ? 'active2' : 'position'}>
              Др.
            </div>
            <div onClick={handleToggleZb} className={isActiveZb ? 'active2' : 'position'}>
              Зб.
            </div>
            <div onClick={handleTogglePo} className={isActivePo ? 'active2' : 'position'}>
              По.
            </div>
            <div onClick={handleToggleUgl} className={isActiveUgl ? 'active2' : 'position'}>
              Угл.
            </div>
            <div onClick={handleTogglePen} className={isActivePen ? 'active2' : 'position'}>
              Пен.
            </div>
            <div onClick={handleToggleSht} className={isActiveSht ? 'active2' : 'position'}>
              Шт.
            </div>
            <div onClick={handleToggleCap} className={isActiveCap ? 'active2' : 'position'}>
              Кап.
            </div>
            <div onClick={handleTogglePr} className={isActivePr ? 'active2' : 'position'}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
          <div>
            <div className={styles.name_and_position}>Gk</div>
            <div className={styles.name_and_position}>Колісник Андрій</div>
            <div onClick={handleToggle} className={'active2' + (isActive ? 'active2' : '')}>
              Пл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Др.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Зб.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              По.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Угл.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пен.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Шт.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Кап.
            </div>
            <div onClick={handleToggle} className={'position' + (isActive ? 'active2' : '')}>
              Пр.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
