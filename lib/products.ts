export type Product = {id:string;name:string;brand:string;category:string;price:number;specs:Record<string,string>;emoji:string};
export const products:Product[] = [
{id:"phone-1",name:"טלפון דגם A",brand:"Demo",category:"סמארטפונים",price:1999,emoji:"📱",specs:{"מסך":"6.1 אינץ׳","אחסון":"128GB","סוללה":"4,500mAh"}},
{id:"phone-2",name:"טלפון דגם B",brand:"Demo",category:"סמארטפונים",price:2499,emoji:"📱",specs:{"מסך":"6.7 אינץ׳","אחסון":"256GB","סוללה":"5,000mAh"}},
{id:"audio-1",name:"אוזניות דגם A",brand:"Demo",category:"אוזניות",price:349,emoji:"🎧",specs:{"חיבור":"Bluetooth","סוללה":"30 שעות","ביטול רעשים":"כן"}},
{id:"audio-2",name:"אוזניות דגם B",brand:"Demo",category:"אוזניות",price:499,emoji:"🎧",specs:{"חיבור":"Bluetooth","סוללה":"40 שעות","ביטול רעשים":"כן"}},
{id:"mic-1",name:"מיקרופון דגם A",brand:"Demo",category:"מיקרופונים",price:299,emoji:"🎙️",specs:{"חיבור":"USB-C","כיווניות":"Cardioid","קצב דגימה":"48kHz"}},
{id:"mic-2",name:"מיקרופון דגם B",brand:"Demo",category:"מיקרופונים",price:399,emoji:"🎙️",specs:{"חיבור":"USB-C","כיווניות":"Cardioid","קצב דגימה":"96kHz"}}
];
