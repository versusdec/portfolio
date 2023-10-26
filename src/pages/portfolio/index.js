import Styles from './styles.module.scss'
import {
  Cake, Call, Email, Place, SettingsOutlined, Telegram
} from '@mui/icons-material'
import {SvgIcon} from "@mui/material";
import {format, formatDistanceToNowStrict} from 'date-fns'
import {Button} from "../../components/button";

const Portfolio = () => {
  
  return (
    <main className={Styles.main}>
      <h2>My <span>Portfolio</span></h2>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <img src="/assets/img/keszflow.png" alt="keszflow"/>
          <aside>
            <h3>Budget tracker</h3>
            <ul>
              <li>
                <span>Project : </span>
                <span>MVP</span>
              </li>
              <li>
                <span>Languages : </span>
                <span>react, typescript, next.js, material ui, npm workspaces, storybook, playwright, enzyme</span>
              </li>
            </ul>
            <a href={'/keszflow/login'} target={'_blank'}>
              <Button>preview</Button>
            </a>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <img src="/assets/img/botto.png" alt="botto"/>
          <aside>
            <h3>Communication Platform</h3>
            <ul>
              <li>
                <span>Project : </span>
                <span>Landing Page</span>
              </li>
              <li>
                <span>Languages : </span>
                <span>html, css, js, jq</span>
              </li>
            </ul>
            <a href={'/botto'} target={'_blank'}>
              <Button>preview</Button>
            </a>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <img src="/assets/img/yugo.png" alt="yugo"/>
          <aside>
            <h3>Advertising Platform</h3>
            <ul>
              <li>
                <span>Project : </span>
                <span>Landing Page</span>
              </li>
              <li>
                <span>Languages : </span>
                <span>html, css, js, jq</span>
              </li>
            </ul>
            <a href={'/yugo'} target={'_blank'}>
              <Button>preview</Button>
            </a>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <img src="/assets/img/estate.png" alt="estate"/>
          <aside>
            <h3>Housing Estates</h3>
            <ul>
              <li>
                <span>Project : </span>
                <span>Landing Page</span>
              </li>
              <li>
                <span>Languages : </span>
                <span>html, css, js, jq</span>
              </li>
            </ul>
            <a href={'/estate'} target={'_blank'}>
              <Button>preview</Button>
            </a>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Portfolio;