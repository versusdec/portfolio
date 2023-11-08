import React from 'react';

import Styles from './styles.module.scss'

export const Button = ({children, className, ...props}) => {
  
  return (
    <div className={Styles.btn + ' ' + (className || '')} {...props}>
      {children}
    </div>
  )
};

