'use client';
import Link from 'next/link';
import {useLanguage} from './site-shell';
export default function NotFound(){const {lang}=useLanguage();return <main id="main" className="section inner-main"><p className="kicker">404 / NOT FOUND</p><h1>{lang==='zh'?'页面未找到':'Page not found'}</h1><p className="body-copy">{lang==='zh'?'链接可能有误，或内容尚未准备好。':'The link may be incorrect, or the content is not ready yet.'}</p><Link className="primary" href="/">{lang==='zh'?'返回首页':'Back to home'} →</Link></main>}