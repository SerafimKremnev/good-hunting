import React from 'react';
import styles from "../components/blocks/Hero/Hero.module.css";
import Dot from "../components/ui/Dot/Dot";
import Button from "../components/ui/Button/Button";

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <div className={styles.buttons}>
        <Button variant={'gray'} href={'/'}>Вернуться на главную</Button>
      </div>
    </div>
  );
};

export default NotFound;