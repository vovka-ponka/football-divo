import React from 'react';
import styles from './game.module.scss';

function Game() {
  // let actions = [];
  let half = 0;
  let moment1 = 0;
  let moment2 = 0;
  let actionNow;
  let action = ['пас', 'Удар і промазав', 'Удар та гоооласос', 'Прохід', 'втратив мяча'];

  const [actions, setActions] = React.useState([]);

  React.useEffect(() => {
    console.log(actions);
  }, [actions]);

  const addActions = () => {
    actionNow = action[Math.floor(Math.random() * action.length)];
    const newArr = [...actions, actionNow];
    setActions(newArr);
  };

  const run = () => {
    do {
      if (half === 0 && moment1 < 20 && moment2 < 20) {
        // addActions();
        actionNow = action[Math.floor(Math.random() * action.length)];
        actions[moment1] = actionNow;
        const newArr = [...actions, actionNow];
        setActions(newArr);

        moment1++;
        console.log(moment1);
        console.log(actions);
      } else if (half === 1 && moment1 > 0 && moment2 > 0) {
      } else {
      }
    } while (moment1 < 20);
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
