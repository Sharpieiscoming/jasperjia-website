import {cherySlug,projectTitle,articleTitle,summary as cherySummary} from './chery-data';
import {usdSlug,usdTitle,usdSummary,reflectionTitle} from './usd-reflection-data';
export type Bilingual = {zh:string;en:string};
export const projects: {slug:string;title:Bilingual;category:string;summary:Bilingual;published?:boolean}[] = [
 {slug:'building-with-ai',published:true,title:{zh:'我是如何用 AI 搭建个人网站的',en:'How I Built My Website with AI'},category:'Personal Project / AI Experiment',summary:{zh:'从 ¥15 域名和两个 ChatGPT 窗口出发，将想法变成上线的个人网站。',en:'From a ¥15 domain and two ChatGPT windows to a live personal website.'}},
 {slug:'bank-branch-sales',published:true,title:{zh:'银行渠道销售地图',en:'Bank Branch Sales Visualization'},category:'Data Visualization',summary:{zh:'中国银行与平安银行深圳网点交互地图，支持内置搜索、筛选与网点详情。',en:'Interactive Shenzhen branch maps for Bank of China and Ping An Bank, with built-in search, filters, and details.'}},
 {slug:usdSlug,published:true,title:usdTitle,category:'Finance / Investment Reflection',summary:usdSummary},
 {slug:cherySlug,published:true,title:projectTitle,category:'AI / Career Exploration',summary:cherySummary},
 {slug:'market-workspace',title:{zh:'市场研究工作台',en:'Market Research Workspace'},category:'Finance · AI',summary:{zh:'探索市场信息、研究笔记与 AI 摘要的整合方式。',en:'Exploring a connected workflow for market information, notes, and AI summaries.'}},
 {slug:'fund-knowledge-base',title:{zh:'私募研究知识库',en:'Private Fund Knowledge Base'},category:'Research · Data',summary:{zh:'探索结构化客户画像与研究资料的组织方式。',en:'Exploring how to organize structured client profiles and research.'}},
 {slug:'digital-garden',title:{zh:'我的数字花园',en:'A Personal Digital Garden'},category:'Next.js · Tailwind',summary:{zh:'以个人网站为起点，记录金融、技术与成长。',en:'A personal website for documenting finance, technology, and growth.'}}
];
export const articles: {slug:string;title:Bilingual;category:string;summary:Bilingual;published?:boolean}[] = [
 {slug:'building-with-ai',published:true,category:'ai',title:{zh:'从零到上线：我如何通过 AI 搭建自己的个人网站',en:'From Zero to Live: How I Built My Personal Website with AI'},summary:{zh:'一次没有传统编程基础的建站经历：关于需求讨论、AI 协作与持续迭代。',en:'A first-person account of building a website without a traditional programming background: requirements, AI collaboration, and iteration.'}},
 {slug:usdSlug,published:true,category:'finance',title:reflectionTitle,summary:{zh:'从期待美元升值与理财双重收益，到约240元净亏损：一次关于直觉、信念与研究的个人复盘。',en:'From hoping for dollar appreciation and product income to an estimated ¥240 loss: a personal reflection on intuition, belief, and research.'}},
 {slug:cherySlug,published:true,category:'growth',title:articleTitle,summary:cherySummary},
 {slug:'market-framework',category:'finance',title:{zh:'从零开始，建立我的市场认知框架',en:'Building my first framework for understanding markets'},summary:{zh:'计划梳理市场参与者、基本概念与日常学习方法。',en:'A planned outline of market participants, core concepts, and learning habits.'}},
 {slug:'ai-research-partner',category:'ai',title:{zh:'当 AI 成为研究搭档：工具之外的思考',en:'AI as a research partner: beyond the tools'},summary:{zh:'计划讨论信息整理、来源核实与研究中的判断。',en:'A planned discussion of information organization, source verification, and judgment.'}},
 {slug:'learning-in-public',category:'growth',title:{zh:'Learning in public：把成长变成可见的过程',en:'Learning in public: making progress visible'},summary:{zh:'计划记录如何将学习笔记转化为可分享的内容。',en:'A planned reflection on turning learning notes into shareable work.'}}
];
