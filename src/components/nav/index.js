import React, {useCallback, useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import Styles from './styles.module.scss';
import cx from "classnames";
import {book} from '../../navigation'
import {Home as HomeIcon, Article as ArticleIcon, CasesRounded as CasesIcon} from '@mui/icons-material'
import {useRouter} from 'next/router'

const GetIcon = (icon) => {
  switch (icon) {
    case 'home':
      return <i><HomeIcon/></i>
    case 'about':
      return <i><ArticleIcon/></i>
    case 'portfolio':
      return <i><CasesIcon/></i>
    
  }
}

export const Nav = () => {
  const location = useRouter()
  const [active, setActive] = useState(false);
  const ref = useRef(null)
  
  const handleOpen = useCallback(() => {
    setActive(true)
  }, [])
  
  const handleClose = useCallback(() => {
    setActive(false)
  }, [])
  
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (active && e.target.closest('header') !== ref.current) {
        setActive(false)
      }
    })
  }, [ref, active])
  
  const menuCX = cx({
    [Styles.menu]: true,
    [Styles.active]: active
  });
  
  const navCX = cx({
    [Styles.nav]: true,
    [Styles.active]: active
  });
  
  const navItems = Object.keys(book).map(key => {
    const liCX = cx({
      [Styles.active]: location.pathname === book[key],
    });
    return <li key={key} className={liCX}><Link href={book[key]} onClick={handleClose}> {GetIcon(key)} {key}</Link></li>
  })
  
  return (
    <header className={Styles.nav} ref={ref}>
      <div onClick={active ? handleClose : handleOpen} className={menuCX}><span/></div>
      <nav className={navCX}>
        <ul>
          {navItems}
        </ul>
      </nav>
    </header>
  )
};