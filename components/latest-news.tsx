"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface NewsItem {
  title: string
  date: string
  excerpt: string
}

export function LatestNews() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setNewsItems(data)
      } catch (e) {
        console.error("Failed to fetch news:", e)
        setError("Failed to load news. Please try again later.")
      }
    }

    fetchNews()
  }, [])

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <section className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Latest News
        </h2>
        <p className="mt-4 text-muted-foreground">
          Stay updated with the latest happenings on our server
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href="/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/blog">View All News</Link>
        </Button>
      </div>
    </section>
  )
}

