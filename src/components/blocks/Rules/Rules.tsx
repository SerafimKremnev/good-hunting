import React from 'react';
import SvgWrapper from "../../other/SvgWrapper/SvgWrapper";
import Arrow from '/public/icons/arrow-back.svg'
import TitlePage from "../../ui/TitlePage/TitlePage";
import styles from './Rules.module.css'

const Rules = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <SvgWrapper href={'/'}>
          <Arrow/>
        </SvgWrapper>
        <TitlePage>Правила</TitlePage>
      </div>
      <div className={styles.main}>
        <ol>
          <li>Создайте комнату</li>
          <li>Пригласите друзей указав номер</li>
          <li>...</li>
        </ol>
      </div>
    </div>
  );
};

export default Rules;