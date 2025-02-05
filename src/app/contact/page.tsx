"use client"

import { useState } from "react"
import { HomeDock } from "@/components/home-dock"
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"
import { cn } from "@/lib/utils"
import emailjs from '@emailjs/browser'
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function ContactPage() {
  const { resolvedTheme } = useTheme()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_EMAIL_SENT_TO!
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.status === 200) {
        toast({
          description: "Your message has been sent successfully.",
        })
        setFormData({ email: "", subject: "", message: "" })
      }
    } catch {
      toast({
        variant: "destructive",
        description: "There was a problem sending your message.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        staticity={50}
        color={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
      />
      
      <div className="relative z-10 w-full max-w-md">
        <Card className={cn(
          "border border-[rgba(255,255,255,0.10)]",
          "dark:bg-[rgba(40,40,40,0.70)] bg-gray-100",
          "shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        )}>
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact
            </CardTitle>
            <CardDescription>
              If you find any issues or want to suggest improvements, please send me a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px]"
                />
              </div>

              <RainbowButton 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </RainbowButton>
            </form>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground mt-4">
          Your email will be only read by me and won&#39;t be shared with anyone else.
        </div>
      </div>

      <HomeDock />
    </main>
  )
}
