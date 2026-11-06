export type Offer={productId:string;store:string;price:number;url:string;updatedAt:string;currency:"ILS";availability?:"in_stock"|"out_of_stock"|"unknown"};
const MAX_AGE_MS=48*60*60*1000;
function valid(x:unknown):x is Offer{
 if(!x||typeof x!=="object")return false;
 const o=x as Record<string,unknown>;
 if(typeof o.productId!=="string"||typeof o.store!=="string"||!o.store.trim()||typeof o.price!=="number"||!Number.isFinite(o.price)||o.price<=0||o.currency!=="ILS"||typeof o.url!=="string"||typeof o.updatedAt!=="string")return false;
 try{const u=new URL(o.url);if(u.protocol!=="https:")return false}catch{return false}
 const date=Date.parse(o.updatedAt);
 return Number.isFinite(date)&&date<=Date.now()+300000&&Date.now()-date<=MAX_AGE_MS;
}
export async function getOffers(productId:string):Promise<Offer[]>{
 const endpoint=process.env.FINDHUB_OFFERS_FEED_URL;
 if(!endpoint||!endpoint.startsWith("https://"))return [];
 try{
  const response=await fetch(endpoint,{next:{revalidate:1800},headers:process.env.FINDHUB_FEED_TOKEN?{Authorization:`Bearer ${process.env.FINDHUB_FEED_TOKEN}`}:{}});
  if(!response.ok)return [];
  const json:unknown=await response.json();
  if(!Array.isArray(json))return [];
  return json.filter(valid).filter(o=>o.productId===productId&&o.availability!=="out_of_stock").sort((a,b)=>a.price-b.price).slice(0,20);
 }catch{return []}
}
