import { Button } from "../../components/button";
import { GitHub as GitHubIcon, GitHub } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Modal } from "../../components/modal";
import { Recorder } from "../../components/Recorder"
import Styles from './styles.module.scss'

const Portfolio = () => {
  const [playerInit, setPlayerInit] = useState(false)
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    if (!playerInit) {
      Recorder(document.getElementById('player'), {record: true, file: '/recorder/example.mp3'})
      setPlayerInit(true)
    }
    /*Dropzone(app, {
      accept: '.mp3',
      onChange: (files) => {
        recorder.updateFile(files[0])
      }
    })*/
  }, [playerInit])
  
  return (
    <main className={Styles.main}>
      <h2>My <span>Portfolio</span></h2>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/botto.png" alt="botto" loading={'lazy'}/>
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
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/botto" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/yugo.png" alt="yugo" loading={'lazy'}/>
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
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/yugo" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/estate.png" alt="estate" loading={'lazy'}/>
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
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/estate" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/infrared.png" alt="infrared" loading={'lazy'}/>
          </picture>
          <aside>
            <h3>Lawyers Company</h3>
            <ul>
              <li>
                <span>Project : </span>
                <span>Personal Website</span>
              </li>
              <li>
                <span>Languages : </span>
                <span>html, css, js, jq</span>
              </li>
            </ul>
            <div className={Styles.preview}>
              <a href={'/infrared'} target={'_blank'}>
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/infrared" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/tdj.png" alt="tdj" loading={'lazy'}/>
          </picture>
          <aside>
            <h3>Scooter Sharing</h3>
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
              <a href={'/tdj'} target={'_blank'}>
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/tdj" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/vodoley.png" alt="vodoley" loading={'lazy'}/>
          </picture>
          <aside>
            <h3>Sprinkle Machines</h3>
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
              <a href={'/vodoley'} target={'_blank'}>
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/vodoley" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div className={Styles.list}>
        <div className={Styles.item}>
          <picture>
            <img src="/assets/img/vtb.png" alt="vtb" loading={'lazy'}/>
          </picture>
          <aside>
            <h3>Digital Distribution</h3>
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
              <a href={'/vtb'} target={'_blank'}>
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/portfolio/tree/master/public/vtb" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      
      <div className={Styles.list} style={{display: "none"}}>
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
                <Button secondary>preview</Button>
              </a>
              <a href="https://github.com/versusdec/keszflow" target={"_blank"} className={Styles.git}>
                <SvgIcon><GitHub/></SvgIcon>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div id={'player'} className={Styles['player-wrapper']}>
        <a title="github" target="_blank" rel="noopener" href="https://github.com/versusdec/portfolio/tree/master/public/recorder"><SvgIcon><GitHubIcon/></SvgIcon></a>
        {/*<a className={Styles.upload} onClick={()=>{
          setOpen(true)
        }}>upload</a>*/}
      </div>
      {/*<Modal open={open}>
        <h1>hello world</h1>
      </Modal>*/}
    </main>
  )
}

export default Portfolio;