import React from 'react';
import styles from './game.module.scss';

function Game() {
  let half = 0;
  let moment = 0;
  let actionNow;
  let momentAll = 0;
  let action = ['пас', 'Удар і промазав', 'Удар та гоооласос', 'Прохід', 'втратив мяча'];

  const [actions, setActions] = React.useState([]);
  React.useEffect(() => {
    console.log(actions);
  }, [actions]);

  const run = () => {
    do {
      if (half === 0 && moment <= 41) {
        if (moment === 0) {
          actionNow = 'Почався 1 тайм!';
          actions[moment] = actionNow;
          const newArr = [...actions, actionNow];
          setActions(newArr);
          moment++;
        }
        actionNow = action[Math.floor(Math.random() * action.length)];
        actions[moment] = actionNow;
        const newArr = [...actions, actionNow];
        setActions(newArr);

        momentAll++;
        if (moment === 41) {
          half = 1;
          actionNow = 'Почався 2 тайм!';
          actions[moment] = actionNow;
          const newArr = [...actions, actionNow];
          setActions(newArr);
          console.log(moment);
          console.log(newArr);
        }
        moment++;
      } else if (half === 1 && moment <= 82) {
        actionNow = action[Math.floor(Math.random() * action.length)];
        actions[moment] = actionNow;
        const newArr = [...actions, actionNow];
        setActions(newArr);
        moment++;
        momentAll++;
      } else {
      }
    } while (momentAll < 82);
  };

  return (
    <div className={styles.all}>
      <div className={styles.score}>
        <div>0</div>
        <div>-:-</div>
        <div>0</div>
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
