"use client"

import { Label } from "@/components/ui/label"
import { useState } from "react"
import { HomeDock } from "@/components/home-dock"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { CardInput } from "@/components/ui/card-input"
import { PaymentQRDialog } from "@/components/ui/payment-qr-dialog"
import { useToast } from "@/hooks/use-toast"
import { getCardType, validateCardNumber } from "@/lib/card-utils"

export default function IDFCPaymentPage() {
  const { resolvedTheme } = useTheme()
  const { toast } = useToast()
  const [cardNumber, setCardNumber] = useState("")
  const [showQR, setShowQR] = useState(false)

  const handleGenerateQR = () => {
    const type = getCardType(cardNumber);
    if (!type || !validateCardNumber(cardNumber)) {
      toast({
        variant: "destructive",
        description: "Please enter a valid credit card number.",
      })
      return;
    }
    setShowQR(true);
  };

  const getUpiId = () => {
    return `${cardNumber}.CC@IDFCBANK`
  }

  const getUpiForQR = () => {
    return `upi://pay?pa=${cardNumber}.CC@IDFCBANK&pn=IDFC Bank Payment&cu=INR`;
  }

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
              IDFC Bank Payment
            </h1>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <CardInput
                  id="card"
                  placeholder="Enter 16 digit card number"
                  value={cardNumber}
                  onValueChange={setCardNumber}
                  maxLength={19}
                />
              </div>

              <RainbowButton 
                onClick={handleGenerateQR}
                className="w-full"
              >
                Get UPI QR Code
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>

      <PaymentQRDialog 
        open={showQR}
        onOpenChange={setShowQR}
        bankName="IDFC Bank"
        upiId={getUpiId()}
        upiLink={getUpiForQR()}
      />

      <HomeDock />
    </main>
  )
} 