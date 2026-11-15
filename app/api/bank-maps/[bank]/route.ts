import {mapSource} from '../../../bank-maps/map-source';
export const dynamic='force-dynamic';
export async function GET(request:Request,{params}:{params:Promise<{bank:string}>}){
 const {bank}=await params;if(!['boc','pingan'].includes(bank))return new Response('Not found',{status:404});
 try{const original=mapSource(bank);
 const mobileStyle=`<style id="private-map-mobile-adapter">@media(max-width:640px){header{gap:8px!important;padding-left:10px!important;padding-right:10px!important}header img{max-width:110px;height:auto!important}header h1{font-size:14px!important;line-height:1.4!important}header p,header .ml-auto{display:none!important}[class*="shrink-0"][class*="flex-col"][class*="border-r"]{width:min(300px,72vw)!important;min-width:0!important}}</style>`;
 const mobileToggle=bank==='boc'?`<style>@media(min-width:641px){#private-map-toggle{display:none!important}}</style><script id="private-map-toggle-script">(()=>{const init=()=>{const main=document.querySelector('main');const sidebar=main&&main.previousElementSibling;if(!sidebar||document.getElementById('private-map-toggle'))return;const button=document.createElement('button');button.id='private-map-toggle';button.textContent='查看地图';button.style.cssText='position:fixed;right:12px;top:104px;z-index:10000;padding:7px 10px;border:1px solid #cbd5e1;border-radius:6px;background:white;color:#334155;font-size:12px';button.onclick=()=>{const hide=sidebar.style.display!=='none';sidebar.style.display=hide?'none':'';button.textContent=hide?'展开列表':'查看地图';window.dispatchEvent(new Event('resize'))};document.body.appendChild(button);window.addEventListener('resize',()=>{if(innerWidth>640){sidebar.style.display='';button.textContent='查看地图'}})};new MutationObserver(init).observe(document.body,{childList:true,subtree:true});init()})();</script>`:'';
 const html=original.replace('</head>',mobileStyle+'</head>').replace('</body>',mobileToggle+'</body>');
 if(/(?<![a-zA-Z0-9])[a-fA-F0-9]{32}(?![a-zA-Z0-9])/.test(html)||html.includes('restapi.amap.com'))throw Error('Unreviewed credential');
 return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow','X-Frame-Options':'SAMEORIGIN','Content-Security-Policy':"frame-ancestors 'self'"}});
 }catch{return new Response('Map source unavailable or requires review',{status:503})}
}
