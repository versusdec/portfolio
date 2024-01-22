import React, { useState } from 'react';
import Styles from './styles.module.scss';

export const Modal = (open = false, ...props) => {
  const {children} = props;
  
  return open && (
      <div className={Styles.modal}>
        {children}
      </div>
  )
};
