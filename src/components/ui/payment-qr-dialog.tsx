"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { RainbowButton } from "@/components/ui/rainbow-button"
import QRCode from "react-qr-code"
import { useEffect, useState } from "react"

interface PaymentQRDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bankName: string;
  upiId: string;
  upiLink: string;
}

export function PaymentQRDialog({
  open,
  onOpenChange,
  bankName,
  upiId,
  upiLink,
}: PaymentQRDialogProps) {
  const [showQRCode, setShowQRCode] = useState(false)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowQRCode(true)
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setShowQRCode(false)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>UPI QR for {bankName} CC Payment</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
          <div className="text-sm text-muted-foreground text-center space-y-2 mb-4">
            <p className="font-semibold text-foreground">⚠️ Important Disclaimer</p>
            <ul className="list-disc text-left space-y-1 pl-4">
              <li>I am not responsible for any financial losses.</li>
              <li>Please initially send ₹1 to verify the recipient.</li>
              <li>Ensure the recipient is verified on your UPI app.</li>
              <li>Double-check all entered details before proceeding.</li>
            </ul>
          </div>

          <AnimatePresence mode="wait">
            {!showQRCode ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center p-8"
              >
                <div className="animate-pulse text-center">
                  <p>Please read the disclaimer carefully</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    QR code will appear in a moment...
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="qr-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="p-4 bg-white rounded-lg">
                  <QRCode 
                    value={upiLink}
                    size={256}
                  />
                </div>
                <p className="text-sm font-mono break-all text-center">
                  {upiId}
                </p>
                <a 
                  href={upiLink}
                  className="w-full"
                >
                  <RainbowButton className="w-full">
                    Open UPI App
                  </RainbowButton>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
} 