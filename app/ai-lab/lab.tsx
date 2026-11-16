'use client';
import {useLanguage} from '../site-shell';
import heading from '../page-heading.module.css';
import styles from './lab.module.css';

export default function Lab(){
 const {lang}=useLanguage();const zh=lang==='zh';
 return <main id="main" className={styles.page}>
 <section className={`section ${styles.intro} ${heading.header}`}>
 <p className={heading.label}>AI LAB / PERSONAL EXPERIMENTS</p>
 <h1 className={heading.title}>{zh?'实验室':'AI Lab'}</h1>
 <p className={styles.tagline}>{zh?'实验仍在继续。':'A Space for Experiments.'}</p>
 <p>{zh?'这里会陆续记录一些我用 AI 做的小工具、实验和不成熟的想法。目前还没有正式开放的工具。':'This is where I’ll share small tools, experiments, and unfinished ideas I explore with AI. No tools are publicly available yet.'}</p>
 </section>
 <section className={`section ${styles.preview}`} aria-labelledby="coming-soon-title">
 <div className={styles.field}>
 <div className={styles.grid} aria-hidden="true"/>
 <svg className={styles.symbol} width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true"><path d="M7 25V7h18M63 7h18v18M81 63v18H63M25 81H7V63" stroke="currentColor" strokeWidth="1" opacity=".45"/><circle cx="44" cy="44" r="25" stroke="currentColor" strokeDasharray="2 5" opacity=".55"/><path d="M44 32v24M32 44h24" stroke="currentColor" strokeWidth="1.4"/><circle cx="44" cy="44" r="4" fill="currentColor" fillOpacity=".18"/></svg>
 <p className={styles.eyebrow}>{zh?'想法 · 尝试 · 记录':'IDEAS · EXPLORATION · NOTES'}</p>
 <h2 id="coming-soon-title">Coming Soon</h2>
 <p className={styles.note}>{zh?'等有了值得分享的东西，再放到这里。':'When there’s something worth sharing, it will find a place here.'}</p>
 <div className={styles.rule} aria-hidden="true"><span/></div>
 <p className={styles.caption}>{zh?'个人 AI 实验与工具展示空间':'A personal space for AI experiments and tools'}</p>
 </div>
 </section>
 </main>
}
