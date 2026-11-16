'use client';
import Link from 'next/link';
import {useLanguage} from '../../site-shell';
import {researchTopics,usdSlug} from '../../usd-reflection-data';
export default function ResearchPlaceholder({slug}:{slug:string}){const {lang}=useLanguage();const topic=researchTopics.find(t=>t.slug===slug)!;return <main id="main" className="inner-main"><section className="section page-heading"><Link className="back-link" href={'/projects/'+usdSlug}>← {lang==='zh'?'返回 Project 003':'Back to Project 003'}</Link><p className="kicker">FURTHER RESEARCH</p><h1>{topic.title[lang]}</h1><span className="state-label">{lang==='zh'?'研究中':'Coming Soon'}</span><p className="body-copy">{topic.description[lang]}</p></section></main>}
