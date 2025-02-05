"use client"
import React from "react"
export const DotPattern = ({
  className,
}: {
  className?: string
}) => {
  return (
    <div className={`absolute inset-0 -z-10 h-full w-full ${className}`}>
      <div className="absolute h-full w-full dark:opacity-50">
        <div className="relative h-full w-full">
          <div className="pattern-dots pattern-slate-500 pattern-bg-white 
            pattern-size-4 pattern-opacity-10 h-full w-full" />
        </div>
      </div>
    </div>
  )
} 