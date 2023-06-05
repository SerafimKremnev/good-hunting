import React, {useEffect, useState} from 'react';
import styles from './SearchRoom.module.css'
import SvgWrapper from "../../other/SvgWrapper/SvgWrapper";
import Arrow from '/public/icons/arrow-back.svg'
import Clear from '/public/icons/clear.svg'
import TitlePage from "../../ui/TitlePage/TitlePage";
import Dot from "../../ui/Dot/Dot";
import {useRouter} from "next/router";
const SearchRoom = () => {
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if(password.length > 5) {
      router.push('/settings')
    }
  }, [password])
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <SvgWrapper href={'/'}>
          <Arrow/>
        </SvgWrapper>
        <TitlePage>Номер комнаты</TitlePage>
      </div>
      <div className={styles.password}>
        {new Array(6).fill(0).map((item, index) => (
            <div className={styles.passWrapper} key={index}>
              {
                  password.charAt(index) ?
                  <div className={styles.num}>{password.charAt(index)}</div> :
                  <Dot size={'m'} color={'main'} opacity={'0.5'}/>
              }
            </div>
          )
        )}
      </div>
      <div className={styles.keys}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
            <button onClick={() => setPassword(prev => prev + item)} className={styles.key} key={item}>
              {item}
            </button>
          )
        )}
        <button onClick={() => setPassword(prev => prev.slice(0, prev.length -1))} className={styles.wrapper}>
          <Clear className={styles.clear}/>
        </button>
      </div>
    </div>
  );
};

export default SearchRoom;