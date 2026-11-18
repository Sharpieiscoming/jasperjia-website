import {cherySlug,projectTitle,articleTitle,summary as cherySummary} from './chery-data';
import {usdSlug,usdTitle,usdSummary,reflectionTitle} from './usd-reflection-data';
export type Bilingual = {zh:string;en:string};
export const projects: {slug:string;title:Bilingual;category:string;summary:Bilingual;published?:boolean}[] = [
 {slug:'building-with-ai',published:true,title:{zh:'我是如何用 AI 搭建个人网站的',en:'How I Built My Website with AI'},category:'Personal Project / AI Experiment',summary:{zh:'从 ¥15 域名和两个 ChatGPT 窗口出发，将想法变成上线的个人网站。',en:'From a ¥15 domain and two ChatGPT windows to a live personal website.'}},
 {slug:'bank-branch-sales',published:true,title:{zh:'银行渠道销售地图',en:'Bank Branch Sales Visualization'},category:'Data Visualization',summary:{zh:'中国银行与平安银行深圳网点交互地图，支持内置搜索、筛选与网点详情。',en:'Interactive Shenzhen branch maps for Bank of China and Ping An Bank, with built-in search, filters, and details.'}},
 {slug:usdSlug,published:true,title:usdTitle,category:'Finance / Investment Reflection',summary:usdSummary},
 {slug:cherySlug,published:true,title:projectTitle,category:'AI / Career Exploration',summary:cherySummary},
];
export const articles: {slug:string;title:Bilingual;category:string;summary:Bilingual;published?:boolean}[] = [
 {slug:'building-with-ai',published:true,category:'ai',title:{zh:'从零到上线：我如何通过 AI 搭建自己的个人网站',en:'From Zero to Live: How I Built My Personal Website with AI'},summary:{zh:'一次没有传统编程基础的建站经历：关于需求讨论、AI 协作与持续迭代。',en:'A first-person account of building a website without a traditional programming background: requirements, AI collaboration, and iteration.'}},
 {slug:usdSlug,published:true,category:'finance',title:reflectionTitle,summary:{zh:'从期待美元升值与理财双重收益，到约240元净亏损：一次关于直觉、信念与研究的个人复盘。',en:'From hoping for dollar appreciation and product income to an estimated ¥240 loss: a personal reflection on intuition, belief, and research.'}},
 {slug:cherySlug,published:true,category:'growth',title:articleTitle,summary:cherySummary},
];
