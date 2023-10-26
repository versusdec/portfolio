import { book } from '../../navigation'
import Styles from './styles.module.scss'
import { Button } from '../button'
import Link from "next/link";
import TelegramIcon from '@mui/icons-material/Telegram';
import { SvgIcon } from "@mui/material";
import { AnimatedLayout } from "../../layouts/animated";

const Home = () => {
  
  
  
  return (
    <main className={Styles.main}>
      <h2>hi ! i'm<span> Liubomyr.</span></h2>
      <p>I'm a Front-end developer based in Ukraine.</p>
      <Link href={book.about}>
        <Button>
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