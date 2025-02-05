"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
// import QRCode from "react-qr-code"
import { HomeDock } from "@/components/home-dock"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { PaymentQRDialog } from "@/components/ui/payment-qr-dialog"

export default function AxisPaymentPage() {
  const { resolvedTheme } = useTheme()
  const [mobileNumber, setMobileNumber] = useState("")
  const [cardLastDigits, setCardLastDigits] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const validateForm = (mobile: string, card: string) => {
    const isMobileValid = /^[0-9]{10}$/.test(mobile)
    const isCardValid = /^[0-9]{4}$/.test(card)
    setIsFormValid(isMobileValid && isCardValid)
  }

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10)
    setMobileNumber(value)
    validateForm(value, cardLastDigits)
  }

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4)
    setCardLastDigits(value)
    validateForm(mobileNumber, value)
  }

  const getUpiId = () => {
    return `CC.91${mobileNumber}${cardLastDigits}@axisbank`
  }

  const getUpiForQR = () => {
    return `upi://pay?pa=CC.91${mobileNumber}${cardLastDigits}@axisbank&pn=AXIS Bank Payment&cu=INR`;
  }

  const handleGenerateQR = () => {
    if (!isFormValid) {
      return;
    }
    setShowQR(true);
  };

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
              Axis Bank Payment
            </h1>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  placeholder="Enter 10 digit mobile number"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  maxLength={10}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="card">Card Last 4 Digits</Label>
                <Input
                  id="card"
                  placeholder="Enter last 4 digits of your card"
                  value={cardLastDigits}
                  onChange={handleCardChange}
                  maxLength={4}
                />
              </div>

              <RainbowButton 
                onClick={handleGenerateQR}
                className="w-full" 
                disabled={!isFormValid}
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
        bankName="AXIS Bank"
        upiId={getUpiId()}
        upiLink={getUpiForQR()}
      />

      <HomeDock />
    </main>
  )
} 