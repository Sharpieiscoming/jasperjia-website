'use client';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
type Language = 'zh' | 'en';
const LanguageContext = createContext<{lang:Language; setLang:(lang:Language)=>void}>({lang:'zh',setLang:()=>{}});
export const useLanguage = () => useContext(LanguageContext);
const routes = ['/', '/projects', '/writing', '/ai-lab'];
export function SiteShell({children}:{children:React.ReactNode}) {
 const [lang,setLang]=useState<Language>('zh'); const [ready,setReady]=useState(false); const [menu,setMenu]=useState(false); const path=usePathname();
 useEffect(()=>{try{if(localStorage.getItem('jasper-language')==='en')setLang('en')}catch{}setReady(true)},[]);
 useEffect(()=>{document.documentElement.lang=lang==='zh'?'zh-CN':'en';if(ready){try{localStorage.setItem('jasper-language',lang)}catch{}}},[lang,ready]);
 useEffect(()=>{setMenu(false)},[path]);
 const names=lang==='zh'?['关于','项目','文章','AI Lab']:['About','Projects','Writing','AI Lab'];
 return <LanguageContext.Provider value={{lang,setLang}}><a className="skip" href="#main">{lang==='zh'?'跳到正文':'Skip to content'}</a><header><Link href="/" className="brand">J<span className="brand-dot">.</span><span className="brand-name"><span>JASPER JIA</span><span className="brand-subtitle">PERSONAL WEBSITE</span></span></Link><nav id="site-nav" aria-label={lang==='zh'?'主导航':'Main navigation'} className={menu?'open':''}>{routes.map((route,i)=><Link key={route} href={route} aria-current={(route==='/'?path==='/':path.startsWith(route))?'page':undefined} onClick={()=>setMenu(false)}>{names[i]}</Link>)}</nav><div className="header-tools"><button className="language" onClick={()=>setLang(lang==='zh'?'en':'zh')} aria-label="Switch language / 切换语言"><span className={lang==='zh'?'chosen':''}>中</span><span>/</span><span className={lang==='en'?'chosen':''}>EN</span></button><ThemeToggle/><button className="menu" aria-label={lang==='zh'?'切换导航':'Toggle navigation'} aria-expanded={menu} aria-controls="site-nav" onClick={()=>setMenu(!menu)}>☰</button></div></header>{children}<footer><div><Link className="brand" href="/">J<span className="brand-dot">.</span></Link><h2>{lang==='zh'?'持续学习，持续连接。':'Always learning. Always connecting.'}</h2></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JASPER JIA</span><span>{lang==='zh'?'V1.0 框架 · 内容持续完善':'V1.0 FRAMEWORK · CONTENT IN PROGRESS'}</span><Link href="/#connect">{lang==='zh'?'联系我':'GET IN TOUCH'} ↗</Link></div></footer></LanguageContext.Provider>
}
