"use client"

import Link from "next/link"
// import { Card } from "@/components/ui/card"
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
import { Particles } from "@/components/ui/particles"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"


export default function Home() {

  const { resolvedTheme } = useTheme(); // Get theme correctly

  const [clientShadowColor, setClientShadowColor] = useState("black");

  useEffect(() => {
    if (resolvedTheme) {
      setClientShadowColor(resolvedTheme === "dark" ? "white" : "black");
    }
  }, [resolvedTheme]);

  const banks = [
    {
      name: {
        default: "American Express",
        short: "AMEX"
      },
      path: "/pay/amex",
      bgColor: "bg-amex",
      hoverColor: "hover:bg-amex-dark"
    },
    {
      name: {
        default: "AU SF Bank",
        short: "AU Bank"
      },
      path: "/pay/au",
      bgColor: "bg-au",
      hoverColor: "hover:bg-au-dark"
    },
    {
      name: {
        default: "AXIS Bank",
        short: "AXIS"
      },
      path: "/pay/axis",
      bgColor: "bg-axis",
      hoverColor: "hover:bg-axis-dark"
    },
    {
      name: {
        default: "Bank of Baroda",
        short: "BoB"
      },
      path: "/pay/bob",
      bgColor: "bg-baroda",
      hoverColor: "hover:bg-baroda-dark"
    },
    {
      name: {
        default: "DBS Bank",
        short: "DBS"
      },
      path: "/pay/dbs",
      bgColor: "bg-dbs",
      hoverColor: "hover:bg-dbs-dark"
    },
    {
      name: {
        default: "HDFC Bank",
        short: "HDFC"
      },
      path: "/pay/hdfc",
      bgColor: "bg-hdfc",
      hoverColor: "hover:bg-hdfc-dark"
    },
    {
      name: {
        default: "HSBC Bank",
        short: "HSBC"
      },
      path: "/pay/hsbc",
      bgColor: "bg-hsbc",
      hoverColor: "hover:bg-hsbc-dark"
    },
    {
      name: {
        default: "ICICI Bank",
        short: "ICICI"
      },
      path: "/pay/icici",
      bgColor: "bg-icici",
      hoverColor: "hover:bg-icici-dark"
    },
    {
      name: {
        default: "IDBI Bank",
        short: "IDBI"
      },
      path: "/pay/idbi",
      bgColor: "bg-idbi",
      hoverColor: "hover:bg-idbi-dark"
    },
    {
      name: {
        default: "IDFC First Bank",
        short: "IDFC"
      },
      path: "/pay/idfc",
      bgColor: "bg-idfc",
      hoverColor: "hover:bg-idfc-dark"
    },
    {
      name: {
        default: "IndusInd Bank",
        short: "IndusInd"
      },
      path: "/pay/indusind",
      bgColor: "bg-indusind",
      hoverColor: "hover:bg-indusind-dark"
    },
    {
      name: {
        default: "Kotak Mahindra",
        short: "Kotak"
      },
      path: "/pay/kotak",
      bgColor: "bg-kotak",
      hoverColor: "hover:bg-kotak-dark"
    },
    {
      name: {
        default: "OneCard",
        short: "OneCard"
      },
      path: "/pay/onecard",
      bgColor: "bg-onecard",
      hoverColor: "hover:bg-onecard-dark"
    },
    {
      name: {
        default: "Punjab National Bank",
        short: "PNB"
      },
      path: "/pay/pnb",
      bgColor: "bg-punjab",
      hoverColor: "hover:bg-punjab-dark"
    },
    {
      name: {
        default: "Standard Chartered",
        short: "SC Bank"
      },
      path: "/pay/sc",
      bgColor: "bg-sc",
      hoverColor: "hover:bg-sc-dark"
    },
    {

      name: {
        default: "State Bank of India",
        short: "SBI"
      },
      path: "/pay/sbi",
      bgColor: "bg-sbi",
      hoverColor: "hover:bg-sbi-dark"
    },
    {
      name: {
        default: "Union Bank of India",
        short: "Union Bank"
      },
      path: "/pay/union",
      bgColor: "bg-union",
      hoverColor: "hover:bg-union-dark"
    },
    {
      name: {
        default: "Yes Bank",
        short: "Yes Bank"
      },
      path: "/pay/yes",
      bgColor: "bg-yes",
      hoverColor: "hover:bg-yes-dark"
    }
  ] as const;
  
  
  const theme = useTheme();
  // const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        staticity={50}
        color={theme.resolvedTheme === "dark" ? "#ffffff" : "#000000"}
      />
      
      <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
        <div className="flex flex-col overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm md:shadow-xl">
          <AuroraText>
            <div className="relative flex h-[120px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm md:shadow-xl">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                <LineShadowText 
                  className="italic px-2" shadowColor={clientShadowColor}
                >
                  settled.
                </LineShadowText>
              </h1>
              <RetroGrid />
            </div>
          </AuroraText>
        </div>

        <div className={cn(
          "w-full rounded-xl border border-[rgba(255,255,255,0.10)]",
          "dark:bg-[rgba(40,40,40,0.70)] bg-gray-100",
          "shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
          "p-6"
        )}>
          <div className="grid grid-cols-2 gap-4">
            {banks.map((bank) => (
              <Link 
                key={bank.path}
                href={bank.path}
                className="block group/btn relative"
              >
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[var(--color-3)] to-[var(--color-2)] opacity-0 transition-all duration-500 group-hover/btn:opacity-100" />
                <Button
                  variant="default"
                  className={`relative w-full h-16 text-lg font-semibold ${bank.bgColor} ${bank.hoverColor} transition-all duration-500`}
                >
                  {typeof bank.name === 'object' ? (
                    <>
                      <span className="hidden md:block">{bank.name.default}</span>
                      <span className="md:hidden">{bank.name.short}</span>
                    </>
                  ) : (
                    bank.name
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <HomeDock />
    </main>
  )
}
