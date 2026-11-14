import type { Metadata } from 'next';
import './globals.css';
import {SiteShell} from './site-shell';
export const metadata: Metadata = { title: 'Jasper Jia — Finance × AI Explorer', description: 'Exploring the intersection of financial markets and artificial intelligence. 贾的金融与人工智能探索日志。', robots: { index: false, follow: false } };
export default function Layout({children}: {children: React.ReactNode}) { return <html lang="zh-CN"><body><SiteShell>{children}</SiteShell></body></html> }
