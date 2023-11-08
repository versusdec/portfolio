import { book } from '../../navigation'
import Styles from './styles.module.scss'
import { Button } from '../button'
import Link from "next/link";
import { Telegram as TelegramIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { SvgIcon } from "@mui/material";
import { AnimatedLayout } from "../../layouts/animated";
import React from "react";

const Home = () => {
  
  
  
  return (
    <main className={Styles.main}>
      <h2>hi ! i'm<span> Liubomyr.</span></h2>
      <p>I'm a Front-end developer based in Ukraine.</p>
      <Link href={book.about}>
        <Button>
          <div className={Styles.hover}>
            <svg viewBox="0 0 180 41" className="border">
              <polyline points="178,1 178,40 1,40 1,1 178,1" className="bg-line"/>
              <polyline points="178,1 178,40 1,40 1,1 178,1" className="hl-line"/>
            </svg>
          </div>
          more about me
        </Button>
      </Link>
      <div className={Styles.homeContact}>
        <p>
          Let's work together
          <a href="mailto:versusdec@gmail.com">versusdec@gmail.com</a>
          <span><a href="tel:+380669820905">+38 066 982 09 05</a></span>
        </p>
      </div>
      <div className={Styles.homeSocial}>
        <ul className="">
          <li className="github">
            <a title="github" target="_blank" rel="noopener" href="https://github.com/versusdec"><SvgIcon><GitHubIcon/></SvgIcon></a>
          </li>
          <li className="telegram">
            <a title="Telegram" target="_blank" rel="noopener" href="https://t.me/versusdec"><SvgIcon><TelegramIcon/></SvgIcon></a>
          </li>
        </ul>
      </div>
    </main>
  )
}

Home.getLayout = (page) => (
  <>
    <AnimatedLayout>
      {page}
    </AnimatedLayout>
  </>
);

export default Home