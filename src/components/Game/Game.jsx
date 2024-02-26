import React from 'react';
import styles from './game.module.scss';

function Game() {
  let half = 0;
  let moment = 0;
  let actionNow;
  let momentAll = 0;
  let action = [
    'пас',
    'Удар і промазав',
    'Удар та гоооласос',
    'Прохід',
    'втратив мяча',
    'Нам забили',
  ];

  const [actions, setActions] = React.useState([]);
  const [gameScore1, setGameScore1] = React.useState(0);
  const [gameScore2, setGameScore2] = React.useState(0);

  React.useEffect(() => {
    console.log(actions);
  }, [actions, gameScore1, gameScore2]);

  const run = () => {
    do {
      if (half === 0 && moment <= 41) {
        // Перший надпис - що це 1 тайм
        if (moment === 0) {
          actionNow = 'Почався 1 тайм!';
          actions[moment] = actionNow;
          const newArr = [...actions, actionNow];
          setActions(newArr);
          moment++;
        }
        // Наступні надписи у 1 таймі
        actionNow = action[Math.floor(Math.random() * action.length)];
        actions[moment] = actionNow;
        const newArr = [...actions, actionNow];
        setActions(newArr);
        // Перевіркан а голи хоз (тимчасово)
        if (actionNow === 'Удар та гоооласос') {
          setGameScore1((gameScore1) => gameScore1 + 1);
        }
        // перевіркан а гол гост (тимчасово)
        if (actionNow === 'Нам забили') {
          setGameScore2((gameScore2) => gameScore2 + 1);
        }
        // надпис, що це 2 тайм
        if (moment === 41) {
          half = 1;
          actionNow = 'Почався 2 тайм!';
          actions[moment] = actionNow;
          const newArr = [...actions, actionNow];
          setActions(newArr);
        }
        moment++;
        momentAll++;
        // 2 тайм
      } else if (half === 1 && moment <= 82) {
        actionNow = action[Math.floor(Math.random() * action.length)];
        actions[moment] = actionNow;
        const newArr = [...actions, actionNow];
        setActions(newArr);
        moment++;
        momentAll++;
      } else {
      }
      // Кінець гри
    } while (momentAll < 82);
  };

  return (
    <div className={styles.all}>
      <div className={styles.score}>
        <div>{gameScore1}</div>
        <div>-:-</div>
        <div>{gameScore2}</div>
      </div>
      <div className={styles.button}>
        <button onClick={() => run()} name="match_go" type="button">
          Почати гру
        </button>
        <div>
          <ul>
            {actions.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Game;
