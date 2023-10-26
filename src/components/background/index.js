import React from 'react';
import Styles from './styles.module.scss';

export const Background = () => {

  return (
      <div className={Styles.bg}>
        <div className={Styles.dots}/>
        <ul className={Styles.circles}>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
          <li key={Math.floor(Math.random() * 10000)}></li>
        </ul>
      </div>
  )
};
