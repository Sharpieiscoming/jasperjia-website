import {mapSearchKey} from '../../bank-maps/map-source';
export const dynamic='force-dynamic';
export async function GET(request:Request){
 if(request.headers.get('sec-fetch-site')==='cross-site')return Response.json({status:'0',info:'Cross-site request denied'},{status:403});
 const query=new URL(request.url).searchParams;const keywords=(query.get('keywords')||'').trim();
 if(!keywords||keywords.length>80)return Response.json({status:'0',info:'Invalid keywords'},{status:400});
 const bank=query.get('bank')||'';if(!['boc','pingan'].includes(bank))return Response.json({status:'0',info:'Unknown bank'},{status:400});
 const key=mapSearchKey(bank);if(!key)return Response.json({status:'0',info:'Address search is not configured. Built-in branch search remains available.'},{status:503,headers:{'Cache-Control':'no-store'}});
 try{const url=new URL('https://restapi.amap.com/v3/assistant/inputtips');
 url.search=new URLSearchParams({key,keywords,city:'深圳',citylimit:'true',output:'json'}).toString();
 const result=await fetch(url,{cache:'no-store',signal:AbortSignal.timeout(8000)});const data=await result.json();
 return Response.json({status:data.status,info:data.info,tips:Array.isArray(data.tips)?data.tips:[]},{headers:{'Cache-Control':'private, no-store'}});
 }catch{return Response.json({status:'0',info:'Search unavailable'},{status:502})}
}
