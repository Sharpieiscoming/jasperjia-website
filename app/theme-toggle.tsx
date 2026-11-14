'use client';
import {useEffect, useState} from 'react';
import {useLanguage} from './site-shell';

export default function ThemeToggle(){
 const {lang}=useLanguage();const [light,setLight]=useState(false);
 useEffect(()=>{
  setLight(document.documentElement.dataset.theme==='light');
  const sync=(event:StorageEvent)=>{if(event.key!=='jasper-theme')return;const next=event.newValue==='light';document.documentElement.dataset.theme=next?'light':'dark';setLight(next)};
  window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);
 },[]);
 const label=lang==='zh'?(light?'切换至深色主题':'切换至浅色主题'):(light?'Switch to dark theme':'Switch to light theme');
 function toggle(){const next=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=next?'light':'dark';setLight(next);try{localStorage.setItem('jasper-theme',next?'light':'dark')}catch{}}
 return <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label} aria-pressed={light}>
 <svg className="theme-sun" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
 <svg className="theme-moon" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.5A9 9 0 0 1 9.5 3.5a9 9 0 1 0 11 11Z"/></svg>
 </button>
}
