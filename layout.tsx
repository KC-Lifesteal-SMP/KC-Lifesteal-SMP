import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Preloader } from "@/components/preloader"
import { AudioPlayer } from "@/components/audio-player"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full">
      <head>
        <title>KC LifeSteal</title>
        <meta name="description" content="Join KC LifeSteal - A unique Minecraft survival experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/main/music/music1.mp3" as="audio" type="audio/mpeg" crossOrigin="anonymous" />
        <link rel="preload" href="https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/main/music/music2.mp3" as="audio" type="audio/mpeg" crossOrigin="anonymous" />
        <link rel="preload" href="https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/main/music/music3.mp3" as="audio" type="audio/mpeg" crossOrigin="anonymous" />
        <style>{`
          @font-face {
            font-family: 'Minecraft';
            src: url('/fonts/Minecraft.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </head>
      <body className={cn(
        "min-h-screen w-full bg-black font-sans antialiased overflow-x-hidden",
        GeistSans.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <Navigation />
          <main className="w-full">
            {children}
          </main>
          <AudioPlayer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

