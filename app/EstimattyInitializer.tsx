"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    Estimatty?: {
      init?: () => void
    }
  }
}

export default function EstimattyInitializer() {
  const pathname = usePathname()

  useEffect(() => {
    // Always make sure the script is in the DOM (one-time)
    if (!document.getElementById("estimatty-widget-script")) {
      const script = document.createElement("script")
      script.id = "estimatty-widget-script"
      script.async = true
      script.src = "https://w.estimatty.com/cdn/estimatty.js"
      script.dataset.i = "pq.hm4xf9pTG2TcFO2Gv6Vu"
      script.dataset.a = "pq.miRG2ACipka8AMJptVqS"
      document.body.appendChild(script)
    }

    // Ensure .init() runs even if new buttons render late
    let attempts = 0
    const maxAttempts = 10
    const interval = setInterval(() => {
      if (window.Estimatty && typeof window.Estimatty.init === "function") {
        window.Estimatty.init()
        console.log(`✅ Estimatty.init() called on attempt ${attempts + 1}`)
      }
      attempts += 1
      if (attempts >= maxAttempts) {
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [pathname])

  return null
}
