import Styles from './styles.module.scss'
import { Button } from "../../components/button";
import { GitHub as GitHubIcon, GitHub } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import React from "react";

const Portfolio = () => {
  
  return (
    <main className={Styles.main}>
      <h2>My <span>Portfolio</span></h2>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/botto.png" alt="botto"/>
          </picture>
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
            <div className={Styles.preview}>
              <a href={'/botto'} target={'_blank'}>
                <Button>preview</Button>
              </a>
              <a href="https://github.com/versusdec/versusdec.github.io/tree/gh-pages/botto" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/yugo.png" alt="yugo"/>
          </picture>
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
            <div className={Styles.preview}>
              <a href={'/yugo'} target={'_blank'}>
                <Button>preview</Button>
              </a>
              <a href="https://github.com/versusdec/versusdec.github.io/tree/gh-pages/yugo" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/estate.png" alt="estate"/>
          </picture>
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
            <div className={Styles.preview}>
              <a href={'/estate'} target={'_blank'}>
                <Button>preview</Button>
              </a>
              <a href="https://github.com/versusdec/versusdec.github.io/tree/gh-pages/estate" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/keszflow.png" alt="keszflow"/>
          </picture>
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
            <div className={Styles.preview}>
              <a href={'/keszflow/login'} target={'_blank'}>
                <Button>preview</Button>
              </a>
              <a href="https://github.com/versusdec/keszflow" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Portfolio;