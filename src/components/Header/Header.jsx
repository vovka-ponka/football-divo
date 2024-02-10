import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import styles from './header.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/Slice/categorySlice.js';

function Header() {
  const dispatch = useDispatch();
  const sortCategory = useSelector((state) => state.category.categoryId);

  const category = [
    { name: 'Головна', sortProperty: '/' },
    { name: 'Команда', sortProperty: '/comand' },
    { name: 'Інфраструктура', sortProperty: '/infrastructure' },
    { name: 'План на гру', sortProperty: '/plane' },
    { name: 'Фінанси', sortProperty: '/finance' },
    { name: 'Розклад', sortProperty: '/schedule' },
    { name: 'Траснсфери', sortProperty: '/transfers' },
    { name: 'Чемпіонат', sortProperty: '/championship' },
    { name: 'Кабінет', sortProperty: '/cabinet' },
  ];

  // const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (obj) => {
    // setActiveIndex(index);
    dispatch(setSort(obj));
  };

  return (
    <div className={styles.main}>
      <nav>
        <ul className={styles.grid}>
          {category.map((obj, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(obj)}
              className={sortCategory.sortProperty === obj.sortProperty ? 'active' : ''}>
              <Link to={obj.sortProperty}>{obj.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
