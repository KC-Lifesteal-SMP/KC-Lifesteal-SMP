import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Shield, Box, Globe, Database } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Development | KC LifeSteal',
  description: 'Development updates and features of KC LifeSteal Minecraft server',
}

const serverFeatures = [
  {
    icon: Shield,
    title: "Protection & Security",
    features: [
      "Spartan AntiCheat for cheat prevention",
      "WorldGuard for spawn protection",
      "WorldEdit for secure area setup",
      "BanGUI for moderation"
    ]
  },
  {
    icon: Box,
    title: "Storage & Organization",
    features: [
      "ChestSort for inventory management",
      "ChestShop for player economy",
      "Essentials for basic commands"
    ]
  },
  {
    icon: Globe,
    title: "World Management",
    features: [
      "Multiverse Core for multiple worlds",
      "Multiverse Portals for world linking",
      "Multiverse Inventories for per-world items"
    ]
  },
  {
    icon: Database,
    title: "Technical Features",
    features: [
      "Paper 1.20.1 server software",
      "ViaVersion & ViaBackwards for version compatibility",
      "Plugins auto-update for security"
    ]
  }
]

export default function DevelopmentPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
      <div className="container relative mx-auto px-6 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Server Features
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Powered by cutting-edge Minecraft server technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {serverFeatures.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50 transition-colors hover:border-zinc-700/50">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_40%,white_50%,transparent_60%,transparent_100%)] opacity-0 transition-opacity duration-1000 group-hover:animate-shine" />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-zinc-100">
                      <category.icon className="h-5 w-5 text-emerald-400" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-zinc-400">
                          <span className="mr-2 text-emerald-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

