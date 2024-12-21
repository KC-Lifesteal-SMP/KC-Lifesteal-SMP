import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Shield, Users, Trophy, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'About | KC LifeSteal',
  description: 'Learn more about KC LifeSteal Minecraft server',
}

const features = [
  {
    icon: Shield,
    title: "Fair Play",
    description: "Our dedicated team ensures a balanced and enjoyable experience for all players"
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our vibrant community of players who enjoy high-stakes survival"
  },
  {
    icon: Trophy,
    title: "Regular Events",
    description: "Participate in exciting competitions and special events"
  },
  {
    icon: Heart,
    title: "Heart System",
    description: "Experience unique gameplay with our heart stealing mechanics"
  }
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
      <div className="container relative mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            About KC LifeSteal
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Experience a unique Minecraft survival server where every heart counts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50 p-8"
        >
          <p className="text-zinc-400">
            The KC Lifesteal SMP is a Minecraft Survival Multi Player(SMP). The server is a community server. The server has a in-game chest shop, Has rewards, and much more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Card className="group relative overflow-hidden border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50 transition-colors hover:border-zinc-700/50 h-full">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_40%,white_50%,transparent_60%,transparent_100%)] opacity-0 transition-opacity duration-1000 group-hover:animate-shine" />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-zinc-100">
                      <feature.icon className="h-5 w-5 text-zinc-400" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{feature.description}</p>
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

