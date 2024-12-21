import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, this data would come from a database or external API
  const newsItems = [
    {
      title: "Server Update 1.5",
      date: "2024-03-15",
      excerpt: "New features and bug fixes in our latest update.",
    },
    {
      title: "Community Event: Build Contest",
      date: "2024-03-10",
      excerpt: "Join our upcoming build contest and win amazing prizes!",
    },
    {
      title: "New Staff Members",
      date: "2024-03-05",
      excerpt: "Welcome our new moderators to the KC Lifesteal SMP team.",
    },
  ]

  return NextResponse.json(newsItems)
}

