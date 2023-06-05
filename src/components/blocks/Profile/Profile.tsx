import React, {useRef, useState} from 'react';
import styles from './Profile.module.css'
import Cam from '/public/icons/cam.svg'
import SvgWrapper from "../../other/SvgWrapper/SvgWrapper";
import Button from "../../ui/Button/Button";

const Profile = () => {
  const [name, setName] = useState('')
  const ref = useRef<any>(null)
  return (
    <div className={styles.root}>
      <div></div>
      <SvgWrapper type={'button'} className={styles.camWrapper}>
        <Cam/>
      </SvgWrapper>
      <div className={styles.buttons}>
        <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} placeholder={'Введите имя'} className={styles.input} type={'text'}/>
        <Button onClick={(e) => {
          if(name.length < 2) {
            e.preventDefault()
            ref.current.focus()
          }
        }} href={'/game'}>Готово</Button>
      </div>
    </div>
  );
};

export default Profile;