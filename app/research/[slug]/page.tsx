import {notFound} from 'next/navigation';
import {researchTopics} from '../../usd-reflection-data';
import ResearchPlaceholder from './placeholder';
export function generateStaticParams(){return researchTopics.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=researchTopics.find(t=>t.slug===slug);return {title:item?item.title.zh+' / '+item.title.en+' | Jasper Jia':'Not found | Jasper Jia'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!researchTopics.some(t=>t.slug===slug))notFound();return <ResearchPlaceholder slug={slug}/>}
