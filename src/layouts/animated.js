import Head from 'next/head'
import {Background} from "../components/background";
import {Nav} from "../components/nav";

export const AnimatedLayout = ({children, title})=>{
  const t = title || 'versusdec'
  return  <>
    <Head>
      <title>{t}</title>
      <link rel="icon" href="/assets/favicon.png" />
    </Head>
    <Nav/>
    {children}
    <Background/>
  </>
}