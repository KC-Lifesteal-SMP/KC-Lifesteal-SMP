import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Palette, Book, BarChart, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Other Projects | KC LifeSteal',
  description: 'Explore other projects related to KC LifeSteal Minecraft server',
}

const projects = [
  {
    icon: Palette,
    title: "KC LifeSteal Resource Pack",
    description: "Enhance your visual experience with our custom textures and models.",
    link: "#"
  },
  {
    icon: Book,
    title: "KC LifeSteal Wiki",
    description: "Access comprehensive guides, tips, and information about our server.",
    link: "#"
  },
  {
    icon: BarChart,
    title: "Player Statistics Dashboard",
    description: "Track your progress and compare stats with other players.",
    link: "#"
  },
  {
    icon: Globe,
    title: "Community Showcase",
    description: "Explore amazing builds and creations by our talented players.",
    link: "#"
  }
]

export default function OtherProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
      <div className="container relative mx-auto px-6 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Other Projects
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Discover additional resources and tools to enhance your KC LifeSteal experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="h-full"
              >
                <Card className="group relative overflow-hidden border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50 transition-all duration-300 ease-in-out hover:border-zinc-700/50 hover:shadow-lg hover:shadow-cyan-500/5 h-full">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_40%,white_50%,transparent_60%,transparent_100%)] opacity-0 transition-opacity duration-1000 group-hover:animate-shine" />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-zinc-100">
                      <project.icon className="h-5 w-5 text-cyan-400" />
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full">
                    <p className="mb-4 text-zinc-400">{project.description}</p>
                    <Button asChild variant="outline" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 w-fit">
                      <a href={project.link}>Explore</a>
                    </Button>
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

