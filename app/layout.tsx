import type { Metadata } from 'next';
import './globals.css';
import './themes.css';
import {SiteShell} from './site-shell';
export const metadata: Metadata = { title: 'Jasper Jia — Finance × AI Explorer', description: 'Exploring the intersection of financial markets and artificial intelligence. 贾的金融与人工智能探索日志。', robots: { index: false, follow: false } };
// Run before body paint so saved light mode does not briefly render as dark.
const themeInit = "try{document.documentElement.dataset.theme=localStorage.getItem('jasper-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}";
export default function Layout({children}: {children: React.ReactNode}) { return <html lang="zh-CN" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeInit}}/></head><body><SiteShell>{children}</SiteShell></body></html> }
