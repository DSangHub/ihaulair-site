import type {Metadata} from "next"
import "./globals.css"
import {SiteHeader} from "@/components/site-header"
import {SiteFooter} from "@/components/site-footer"
export const metadata:Metadata={title:"IHaulAir — Drive Cleaner. Earn More.",description:"A consumer rewards community for electric and hybrid vehicle owners.",metadataBase:new URL("https://ihaulair.com")}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="bg-background text-foreground font-sans"><SiteHeader/><main className="min-h-screen">{children}</main><SiteFooter/></body></html>}