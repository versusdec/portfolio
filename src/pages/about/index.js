import Styles from './styles.module.scss'
import {
  Cake, Call, Email, Place, SettingsOutlined, Telegram
} from '@mui/icons-material'
import {SvgIcon} from "@mui/material";
import {format, formatDistanceToNowStrict} from 'date-fns'
import {Button} from "../../components/button";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useEffect, useState } from "react";

const skills = [
  {
    name: 'HTML',
    lvl: 90
  },
  {
    name: 'CSS/Sass',
    lvl: 90
  },
  {
    name: 'JS/jQuery',
    lvl: 80
  },
  {
    name: 'React',
    lvl: 60
  },
  {
    name: 'Next.js',
    lvl: 60
  },
  {
    name: 'Typescript',
    lvl: 50
  }
]



const AboutPage = () => {
  const [config, setConfig] = useState(null);
  const birthDate = format(new Date('1993-02-06'), 'MMMM yyyy')
  const experience = config && formatDistanceToNowStrict(new Date(config.experienceDate), {unit: 'year'})
  
  useEffect(()=>{
    const getConfig = async ()=>{
     await fetch('/config.json').then(res=>res.json()).then(res=>{
       setConfig(res)
      })
    }
    getConfig()
  }, [])
  
  return (
    <main className={Styles.main}>
      <h2>About <span>Me</span></h2>
      
      <div className={Styles.info}>
        <img src="/assets/img/me.png" alt=""/>
        <div>
          <p>
            I'm Liubomyr Vus, ukrainian based front‑end developer living in Lviv focused on crafting clean, creative and user‑friendly experiences, I build beautiful and powerful websites.
          </p>
          <div className={Styles.row}>
            <div>
              <ul>
                <li>
                  <p><SvgIcon><Cake/></SvgIcon><span>Birthdate : </span>{birthDate}</p>
                </li>
                <li>
                  <p><SvgIcon><SettingsOutlined/></SvgIcon><span>Experience : </span>{experience}</p>
                </li>
                <li>
                  <p><SvgIcon><Telegram/></SvgIcon><span>Telegram : </span><a title="Telegram" target="_blank" rel="noopener" href="https://t.me/versusdec">versusdec</a></p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p><SvgIcon><Call/></SvgIcon><span>Phone : </span><a href="tel:+380669820905">+38 066 982 09 05</a></p>
                </li>
                <li>
                  <p><SvgIcon><Place/></SvgIcon><span>Address : </span>Lviv, UA</p>
                </li>
                <li>
                  <p><SvgIcon><Email/></SvgIcon><span>Email : </span><a href="mailto:versusdec@gmail.com">versusdec@gmail.com</a></p>
                </li>
              </ul>
            </div>
          </div>
          <a
            target="_blank"
            rel="noopener"
            href={config && config.cvLink}
          >
            <Button className={Styles.btn}>VIEW CV</Button>
          </a>
        </div>
      </div>
      
      <div className={Styles.projects}>
        <h3>My projects</h3>
        <div className={Styles.list}>
          <div className={Styles.item}>
            <div className={Styles.title}>
              CRM system for call centers
              <div className={Styles.period}>6 months</div>
            </div>
            <div className={Styles.desc}>
              An app that allows you make and track calls from the browser. Also allows you to control your projects, users, queues etc.
            </div>
          </div>
          <div className={Styles.item}>
            <div className={Styles.title}>
              Keszflow Tracking App
              <div className={Styles.period}>4 months</div>
            </div>
            <div className={Styles.desc}>
              An app that allows you track your bank and cash accounts balance, track your upcoming ordinary and repeating transactions for personal and business use.
            </div>
          </div>
          <div className={Styles.item}>
            <div className={Styles.title}>
              Voice Messaging Service
              <div className={Styles.period}>1 year</div>
            </div>
            <div className={Styles.desc}>
              Service sends a pre-recorded message to a list of contacts. Clients can create their own IVR hierarchy, upload audio messages, record them directly from a microphone or use built-in TTS service.
            </div>
          </div>
          <div className={Styles.item}>
            <div className={Styles.title}>
              Omnichannel Marketing Platform
              <div className={Styles.period}>1 year</div>
            </div>
            <div className={Styles.desc}>
              The system to automatically generate traffic, control the intensity of leads and evaluate the most profitable approaches.
            </div>
          </div>
        
        </div>
      </div>
      
      <div className={Styles.skills}>
        <h3>My Skills</h3>
        <div className={Styles.list}>
          {skills.map(({name, lvl}, i)=>(<div key={i} className={Styles.item}>
            <div className={Styles.title}>
              {name}
              <div className={Styles.bubble} style={{left: lvl + '%'}}>{lvl}%</div>
            </div>
            <progress value={lvl} max="100"/>
          </div>))}
        </div>
      </div>
  
      <a title="Telegram" className={Styles.tg} target="_blank" rel="noopener" href="https://t.me/versusdec"><SvgIcon><TelegramIcon/></SvgIcon> Contact Me</a>
    
    </main>
  )
}

export default AboutPage;