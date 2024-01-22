import React from 'react';

import Styles from './styles.module.scss'

export const Button = ({children, className, secondary, ...props}) => {
  
  return (
    <div className={Styles.btn + ' ' + (className || '') + (secondary ? Styles.secondary : '')} {...props}>
      {children}
    </div>
  )
};

