"use client"

import { HomeDock } from "@/components/home-dock"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ComingSoonProps {
  bankName: string;
}

export function ComingSoon({ bankName }: ComingSoonProps) {
  const { resolvedTheme } = useTheme()

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        staticity={50}
        color={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
      />
      
      <div className="relative z-10 w-full">
        <div className={cn(
          "w-full max-w-md mx-auto",
          "rounded-xl border border-[rgba(255,255,255,0.10)]",
          "dark:bg-[rgba(40,40,40,0.70)] bg-gray-100",
          "shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
          "p-8"
        )}>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {bankName} Payment
            </h1>
            
            <div className="space-y-6">
              <p className="text-center text-muted-foreground">
                Coming soon! We&#39;re working on adding support for {bankName}.
              </p>

              <Link href="/" className="block">
                <RainbowButton className="w-full">
                  Go Back Home
                </RainbowButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HomeDock />
    </main>
  )
} 