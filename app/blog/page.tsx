import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | KC LifeSteal',
  description: 'Latest news and updates from KC LifeSteal Minecraft server',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold">KC LifeSteal Blog</h1>
      <div className="grid gap-8">
        <article>
          <h2 className="mb-2 text-2xl font-semibold">Latest Server Update</h2>
          <p className="mb-2 text-sm text-gray-500">Posted on June 1, 2023</p>
          <p>We've just released a new update that includes bug fixes and performance improvements. Check out the full changelog for more details!</p>
        </article>
        <article>
          <h2 className="mb-2 text-2xl font-semibold">Upcoming Community Event</h2>
          <p className="mb-2 text-sm text-gray-500">Posted on May 15, 2023</p>
          <p>Join us this weekend for our monthly building competition. Great prizes are up for grabs!</p>
        </article>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  )
}

