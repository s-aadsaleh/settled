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

export default function AmexPaymentPage() {
  const [cardNumber, setCardNumber] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const validateForm = (card: string) => {
    const isCardValid = /^37[0-9]{13}$/.test(card) // Must start with 37 and be 15 digits
    setIsFormValid(isCardValid)
  }

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 15)
    setCardNumber(value)
    validateForm(value)
  }

  const getUpiId = () => {
    return `AEBC${cardNumber}@SC`
  }

  const getUpiForQR = () => {
    return `upi://pay?pa=AEBC${cardNumber}@SC&pn=AMEX Bank Payment&cu=INR`;
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="pattern-dots pattern-black dark:pattern-white pattern-bg-transparent 
        pattern-size-4 pattern-opacity-10 absolute inset-0" />
      
      {/* <Link href="/" className="absolute top-8 left-8 z-20">
        <Button variant="outline" className="bg-white/80 backdrop-blur-sm">← Back</Button>
      </Link> */}

      <div className="relative z-10 w-full">
        <Card className="p-8 w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            American Express Payment
          </h1>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="card">Card Number</Label>
              <Input
                id="card"
                placeholder="Enter 15 digit card number"
                value={cardNumber}
                onChange={handleCardChange}
                maxLength={15}
              />
              <p className="text-sm text-muted-foreground">
                Card number must start with 37
              </p>
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