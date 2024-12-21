"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { Home, Info, Code, Lightbulb, Folder, Bug } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Dev", path: "/development", icon: Code },
  { name: "Features", path: "/feature-requests", icon: Lightbulb },
  { name: "Projects", path: "/other-projects", icon: Folder },
  { name: "Bugs", path: "/bug-reports", icon: Bug },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.mobile-menu') && !target.closest('.menu-trigger')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-center">
        <nav className="w-full max-w-2xl">
          <div className="hidden md:flex w-full justify-between bg-gradient-to-b from-zinc-900/95 to-zinc-900/98 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800/50 shadow-lg shadow-black/20">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "group relative inline-flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out hover:text-white focus:outline-none",
                  pathname === route.path ? "text-white bg-zinc-800/50" : "text-zinc-400"
                )}
              >
                <route.icon className={cn(
                  "mr-1.5 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:scale-110",
                  pathname === route.path ? "text-white" : "text-zinc-400"
                )} />
                <span>{route.name}</span>
                {pathname === route.path && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-zinc-800/50"
                    layoutId="active-nav-item"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden w-full flex justify-center relative">
            <Button
              variant="ghost"
              size="sm"
              className="menu-trigger bg-gradient-to-b from-zinc-900/95 to-zinc-900/98 backdrop-blur-md rounded-full border border-zinc-800/50 shadow-lg shadow-black/20"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
            >
              <Menu className="h-4 w-4" />
            </Button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mobile-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48"
                >
                  <div className="bg-gradient-to-b from-zinc-900/95 to-zinc-900/98 backdrop-blur-md rounded-lg border border-zinc-800/50 shadow-lg shadow-black/20 py-2">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        href={route.path}
                        className={cn(
                          "flex items-center px-4 py-2 text-sm transition-colors",
                          pathname === route.path
                            ? "text-white bg-emerald-500/10"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                        )}
                      >
                        <route.icon className={cn(
                          "mr-2 h-4 w-4",
                          pathname === route.path ? "text-emerald-400" : "text-zinc-400"
                        )} />
                        {route.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  )
}

