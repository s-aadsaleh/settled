"use client"

import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import QRCode from "react-qr-code"
import { HomeDock } from "@/components/home-dock"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function SBIPaymentPage() {
  const [cardNumber, setCardNumber] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const validateForm = (card: string) => {
    const isCardValid = /^[0-9]{16}$/.test(card)
    setIsFormValid(isCardValid)
  }

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16)
    setCardNumber(value)
    validateForm(value)
  }

  const getUpiId = () => {
    return `SBICARD.${cardNumber}@SBI`
  }

  const getUpiForQR = () => {
    return `upi://pay?pa=SBICARD.${cardNumber}@SBI&pn=SBI Card Payment&cu=INR`;
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="pattern-dots pattern-black dark:pattern-white pattern-bg-transparent 
        pattern-size-4 pattern-opacity-10 absolute inset-0" />
      
      <div className="relative z-10 w-full">
        <Card className="p-8 w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SBI Card Payment
          </h1>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="card">Card Number</Label>
              <Input
                id="card"
                placeholder="Enter 16 digit card number"
                value={cardNumber}
                onChange={handleCardChange}
                maxLength={16}
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
              <RainbowButton 
                  className="w-full" 
                  disabled={!isFormValid}
                >
                  Get UPI QR Code
                </RainbowButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Payment QR Code</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center space-y-4 p-4">
                  <div className="p-4 bg-white rounded-lg">
                    <QRCode 
                      value={getUpiForQR()}
                      size={256}
                    />
                  </div>
                  <p className="text-sm font-mono break-all text-center">
                    {getUpiId()}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </div>

      <HomeDock />
    </main>
  )
} 