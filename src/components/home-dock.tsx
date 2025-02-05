"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { HomeIcon, MessageCircle, Sun, Moon } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function HomeDock() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch and unwanted animation on load
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Dock className={cn(
      "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
      "border border-[rgba(255,255,255,0.10)]",
      "dark:bg-[rgba(40,40,40,0.70)] bg-gray-100",
      "shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
    )}>
      <DockIcon>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                <HomeIcon className="w-6 h-6" />
              </motion.div>
            </AnimatePresence>
          </Link>
        </motion.div>
      </DockIcon>

      <DockIcon>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/contact">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key="message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </AnimatePresence>
          </Link>
        </motion.div>
      </DockIcon>

      <div className="w-px h-6 bg-border" />

      <DockIcon>
        <motion.button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hover:text-primary relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.15 }}
              >
                <Sun className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.15 }}
              >
                <Moon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </DockIcon>
    </Dock>
  )
} 