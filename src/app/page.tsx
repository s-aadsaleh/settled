"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Ripple } from "@/components/ui/ripple"
// import { ShineBorder } from "@/components/ui/shine-border"
import { AuroraText } from "@/components/ui/aurora-text"
// import { Dock, DockIcon } from "@/components/ui/dock"
// import { HomeIcon, MessageCircle, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { RetroGrid } from "@/components/ui/retro-grid"
import { LineShadowText } from "@/components/ui/line-shadow-text"
import { HomeDock } from "@/components/home-dock"


export default function Home() {

  
  const banks = [
    {
      name: "American Express",
      slug: "amex",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      name: "Axis Bank",
      slug: "axis",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    },
    {
      name: "SBI Card",
      slug: "sbi",
      bgColor: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700"
    },
    {
      name: "IDFC Bank",
      slug: "idfc",
      bgColor: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700"
    },
    {
      name: "ICICI Bank",
      slug: "icici",
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    },
    {
      name: "AU Small Finance Bank",
      slug: "au",
      bgColor: "bg-rose-600",
      hoverColor: "hover:bg-rose-700"
    }
  ]

  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="pattern-dots pattern-black dark:pattern-white pattern-bg-transparent 
        pattern-size-4 pattern-opacity-10 absolute inset-0" />
      
        <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
          <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              <AuroraText>
                settl
                <LineShadowText className="italic" shadowColor={shadowColor}>
                ed.
                </LineShadowText>
              </AuroraText>
            </h1>
          <RetroGrid />
          </div>
          

          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="grid gap-4">
              {banks.map((bank) => (
                <Link 
                  key={bank.slug}
                  href={`/pay/${bank.slug}`}
                  className="block"
                >
                  <Button
                    variant="default"
                    className={`w-full h-16 text-lg font-semibold ${bank.bgColor} ${bank.hoverColor} transition-colors`}
                  >
                    {bank.name}
                  </Button>
                </Link>
              ))}
            </div>
          </Card>
        </div>

      <HomeDock />
    </main>
  )
}
