import { Geist, Geist_Mono, Inter, Noto_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { NavigationMenuDemo } from "@/components/navbar"

const notoSansHeading = Noto_Sans({ subsets: ['latin'], variable: '--font-heading' })

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, notoSansHeading.variable)}
    >
      <body>
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Game Service Hub</h1>
            < NavigationMenuDemo />
          </div>
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  )
}
