"use client"

import { Input } from "@/components/ui/input"
import { CardType, formatCardNumber, getCardType } from "@/lib/card-utils"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CardInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange: (value: string) => void;
  value: string;
}

export function CardInput({ className, onValueChange, value, ...props }: CardInputProps) {
  const [cardType, setCardType] = useState<CardType>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const type = getCardType(rawValue);
    setCardType(type);
    
    const formattedValue = formatCardNumber(rawValue, type);
    e.target.value = formattedValue;
    onValueChange(rawValue);
  };

  return (
    <div className="relative">
      <Input
        {...props}
        value={formatCardNumber(value, cardType)}
        onChange={handleChange}
        className={cn("pr-12", className)}
      />
      <AnimatePresence>
        {cardType && value.replace(/\D/g, '').length >= 4 && (
          <motion.div 
            className="absolute inset-y-0 right-3 flex items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="w-10 h-10">
              <Image
                src={`/cards/${cardType}.svg`}
                alt={cardType}
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 