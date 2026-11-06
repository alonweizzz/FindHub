import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "FindHub | משווים חכם", description: "השוואת מוצרים ומפרטים במקום אחד" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="he" dir="rtl"><body>{children}</body></html>; }
