import NextHead from 'next/head'
import {Nav} from "../components/nav";

export const PlainLayout = ({children, title})=>{
  const t = title || 'versusdec'
  return  <>
    <NextHead>
      <title>{t}</title>
      <link rel="icon" href="/assets/favicon.png" />
      <link rel="stylesheet" href="/recorder/Recorder.style.css" />
      {/*<script type="text/javascript" src="/recorder/Recorder.js" async/>*/}
    </NextHead>
    <Nav/>
    {children}
  </>
}