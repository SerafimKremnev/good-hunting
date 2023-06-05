import React from 'react';
import styles from './Hero.module.css'
import Button from "../../ui/Button/Button";
import Dot from "../../ui/Dot/Dot";

const Hero = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Good<br/> Hunting</h1>
      <div className={styles.buttons}>
        <div className={styles.dots}>
          <div className={styles.inner}>
            <Dot size={'l'} color={'gray'} opacity={'1'}/>
            <Dot size={'s'} color={'gray'} opacity={'0.4'}/>
            <Dot size={'s'} color={'gray'} opacity={'0.4'}/>
          </div>
        </div>
        <Button href={'/settings'}>Создать комнату</Button>
        <Button href={'/search-room'} variant={'gray'}>Войти</Button>
        <Button href={'/rules'} variant={'gray'}>Правила</Button>
      </div>
    </div>
  );
};

export default Hero;