import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowRight,ExternalLink,Scale,ShieldCheck,Info} from "lucide-react";
import {products} from "../../../lib/products";
export function generateStaticParams(){return products.map(p=>({id:p.id}))}
export function generateMetadata({params}:{params:{id:string}}){const p=products.find(p=>p.id===params.id);return {title:p?`${p.name} | FindHub`:"מוצר לא נמצא | FindHub",description:p?.description||"מפרט מוצר והשוואה ב-FindHub"}}
export default function ProductPage({params}:{params:{id:string}}){
 const product=products.find(p=>p.id===params.id);
 if(!product)notFound();
 const related=products.filter(p=>p.category===product.category&&p.id!==product.id).slice(0,3);
 return <main className="fh-app min-h-screen">
  <header className="fh-nav border-b"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5"><Link href="/" className="text-2xl font-black" dir="ltr">Find<span className="fh-accent">Hub</span></Link><Link href="/#catalog" className="fh-muted flex items-center gap-2 text-sm font-semibold"><ArrowRight size={17}/> חזרה למוצרים</Link></div></header>
  <div className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
   <nav className="fh-muted mb-8 flex flex-wrap items-center gap-2 text-sm"><Link href="/">דף הבית</Link><span>/</span><Link href="/#categories">{product.category}</Link><span>/</span><span>{product.name}</span></nav>
   <div className="grid items-start gap-8 lg:grid-cols-2">
    <div className="fh-product-visual flex min-h-[280px] items-center justify-center rounded-3xl border text-8xl sm:min-h-[400px]" style={{borderColor:"var(--border)"}}><span role="img" aria-label={product.category}>{product.emoji}</span></div>
    <div><span className="fh-kicker text-sm font-bold">{product.brand} · {product.category}</span><h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{product.name}</h1><p className="fh-muted mt-5 text-base leading-8">{product.description||"מידע ומפרט טכני על המוצר"}</p><div className="fh-filter-bar mt-7 rounded-2xl border p-5"><div className="flex items-start gap-3"><Info className="fh-accent mt-1 shrink-0" size={21}/><div><h2 className="font-bold">מחיר בחנויות: טרם זמין</h2><p className="fh-muted mt-2 text-sm leading-6">FindHub עדיין לא מחובר למקורות מחירים בזמן אמת. לא נציג מחירים לא מאומתים.</p></div></div></div>
    <div className="mt-6 flex flex-wrap gap-3">{product.sourceUrl&&<a className="fh-search-action inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold" href={product.sourceUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={17}/> מפרט באתר היצרן</a>}<Link className="fh-compare-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold" href="/#catalog"><Scale size={17}/> השוואת מוצרים</Link></div><p className="fh-muted mt-6 flex items-center gap-2 text-xs"><ShieldCheck size={16}/> הנתונים מוצגים לצורכי מידע; כדאי לאמת באתר היצרן לפני רכישה.</p></div>
   </div>
   <section className="mt-16"><p className="fh-kicker mb-2 text-xs font-bold">SPECIFICATIONS</p><h2 className="text-2xl font-extrabold">מפרט טכני</h2><div className="fh-compare mt-6 overflow-hidden rounded-2xl border">{Object.entries(product.specs).map(([key,value],i)=><div key={key} className="grid grid-cols-1 gap-2 border-b p-4 last:border-b-0 sm:grid-cols-[minmax(140px,1fr)_2fr] sm:gap-6" style={{borderColor:"var(--border)",background:i%2?"var(--surface2)":"transparent"}}><span className="fh-muted text-sm">{key}</span><span className="font-semibold">{value}</span></div>)}</div></section>
   {related.length>0&&<section className="mt-16"><h2 className="mb-6 text-2xl font-extrabold">מוצרים נוספים בקטגוריה</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{related.map(p=><Link key={p.id} href={`/products/${p.id}`} className="fh-product flex items-center gap-4 rounded-2xl border p-5"><span className="fh-product-visual rounded-xl p-4 text-3xl">{p.emoji}</span><span><strong className="block">{p.name}</strong><span className="fh-muted mt-1 block text-sm">לצפייה במפרט</span></span></Link>)}</div></section>}
  </div><footer className="fh-footer border-t px-5 py-8 text-center text-sm"><span className="fh-muted">FindHub · קטלוג מוצרים ראשוני · מחירי חנויות טרם חוברו</span></footer>
 </main>
}