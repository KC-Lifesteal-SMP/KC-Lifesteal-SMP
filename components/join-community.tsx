"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord } from 'lucide-react'

export function JoinCommunity() {
  return (
    <section className="container max-w-4xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Join Our Community
        </h2>
        <p className="mt-4 text-zinc-400">
          Connect with other players and stay updated
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-md text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Discord Community</h3>
        <p className="text-zinc-400 mb-6">
          Join our Discord server to chat with other players, get support, and participate in events.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full">
            <a href="https://discord.gg/8BR2hQBG7Z" target="_blank" rel="noopener noreferrer">
              <Discord className="mr-2 h-4 w-4" /> Join Discord
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

