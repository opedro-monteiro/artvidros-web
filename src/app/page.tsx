'use client'

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <section id="header">
        <h2 className="text-3xl font-bold text-red-500">
          Hello World 👋</h2>
        <Button onClick={handleToggleTheme}>Toggle</Button>
      </section>
    </main>
  )
}