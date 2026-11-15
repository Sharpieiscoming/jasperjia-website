import Link from 'next/link';
import type {Bilingual} from '../content';
import styles from './lab.module.css';

// Reserved for real tools with working internal destinations. No examples are rendered.
export type LabTool = {id:string;title:Bilingual;description:Bilingual;href:`/ai-lab/${string}`;tags:string[]};
export function ToolCard({tool,lang}:{tool:LabTool;lang:'zh'|'en'}){
 return <Link href={tool.href} className={styles.toolCard}><h3>{tool.title[lang]} ↗</h3><p>{tool.description[lang]}</p><div className={styles.toolTags}>{tool.tags.map(tag=><span key={tag}>{tag}</span>)}</div></Link>
}
