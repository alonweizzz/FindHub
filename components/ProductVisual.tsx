"use client";
import {useState} from "react";
export default function ProductVisual({src,emoji,name,className=""}:{src?:string;emoji:string;name:string;className?:string}){
 const [failed,setFailed]=useState(false);
 return <div className={className}>{src&&!failed?<img src={src} alt={name} loading="lazy" onError={()=>setFailed(true)} className="h-full w-full object-contain p-4"/>:<span role="img" aria-label={name}>{emoji}</span>}</div>
}