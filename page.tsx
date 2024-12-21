import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { JoinCommunity } from "@/components/join-community"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-20">
        <Features />
        <JoinCommunity />
      </div>
    </div>
  )
}

