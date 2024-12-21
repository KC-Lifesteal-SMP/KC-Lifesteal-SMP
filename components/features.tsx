"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Package, Server } from 'lucide-react'

const features = [
  {
    title: "Spawn Protection",
    description: "Ensure a safe start for new players with our spawn protection system.",
    icon: Shield
  },
  {
    title: "Lifesteal Heart Resource Pack",
    description: "Experience the unique Lifesteal gameplay with our custom resource pack.",
    icon: Package
  },
  {
    title: "Wide Version Compatibility",
    description: "Compatible with Minecraft versions 1.17.* - 1.21.* and Minecraft Bedrock.",
    icon: Server
  }
]

export function Features() {
  return (
    <section className="container max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Server Features
        </h2>
        <p className="mt-4 text-muted-foreground">
          Discover what makes our server unique
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

