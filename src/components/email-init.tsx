"use client"

import { useEffect } from "react"
import emailjs from '@emailjs/browser'

export function EmailInit() {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])
  
  return null
} 