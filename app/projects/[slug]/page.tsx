import {notFound} from 'next/navigation';
import {SitePage} from '../../site-pages';
import {projects} from '../../content';
export function generateStaticParams(){return projects.filter(({slug})=>slug!=='bank-branch-sales').map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=projects.find(x=>x.slug===slug);return {title:item?item.title.zh+' / '+item.title.en+' | Jasper Jia':'Not found | Jasper Jia'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!projects.some(x=>x.slug===slug))notFound();return <SitePage kind="projects" slug={slug}/> }
