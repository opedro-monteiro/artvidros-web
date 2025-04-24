"use client"

import { useEffect, useState } from "react"

export function useScroll(threshold = 100) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll)

    // Call once to check initial position
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  return isScrolled
}
