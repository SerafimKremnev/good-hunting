import React, {ReactNode} from 'react';
import styles from './Container.module.css'
import cn from "classnames";

interface ContainerProps {
  children: ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className={cn( styles.container)}>
      {children}
    </div>
  );
};

export default Container;