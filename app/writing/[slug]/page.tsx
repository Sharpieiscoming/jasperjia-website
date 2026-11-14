import {notFound} from 'next/navigation';
import {SitePage} from '../../site-pages';
import {articles} from '../../content';
export function generateStaticParams(){return articles.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=articles.find(x=>x.slug===slug);return {title:item?item.title.zh+' / '+item.title.en+' | Jasper Jia':'Not found | Jasper Jia'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!articles.some(x=>x.slug===slug))notFound();return <SitePage kind="writing" slug={slug}/> }
