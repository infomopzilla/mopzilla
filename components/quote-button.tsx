"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface QuoteButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export default function QuoteButton({
  children,
  className = "",
  variant = "default",
}: QuoteButtonProps) {
  return (
    <Button
      variant={variant}
      className={`estimatty-button px-6 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-lg ${className}`}
    >
      {children}
    </Button>
  )
}
