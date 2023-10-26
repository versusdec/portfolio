import Head from 'next/head'
import {Nav} from "../components/nav";

export const PlainLayout = ({children, title})=>{
  const t = title || 'versusdec'
  return  <>
    <Head>
      <title>{t}</title>
      <link rel="icon" href="/assets/favicon.png" />
    </Head>
    <Nav/>
    {children}
  </>
}