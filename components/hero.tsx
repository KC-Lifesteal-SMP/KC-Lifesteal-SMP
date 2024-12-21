"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DiscIcon as DiscordIcon, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://shadersmods.com/wp-content/uploads/2021/07/projectluma-shaders-minecraft-19.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.2)',
            transformOrigin: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The KC Lifesteal SMP
          </h1>
          <p className="mb-12 text-xl text-gray-200">
            Join us at play.lifesteal.team
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] gap-2 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-700/50"
              asChild
            >
              <a href="https://discord.gg/8BR2hQBG7Z" target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="h-5 w-5" />
                Join Discord
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] gap-2 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-700/50"
              onClick={() => {
                navigator.clipboard.writeText("play.lifesteal.team")
              }}
            >
              <Play className="h-5 w-5" />
              Play Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

