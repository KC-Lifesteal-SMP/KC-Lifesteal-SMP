"use client"

import { useState } from 'react'
import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { MessageSquare, Send, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/components/ui/use-toast" //removed import
import { SuccessDialog } from "@/components/success-dialog"

export const metadata: Metadata = {
  title: 'Feature Requests | KC LifeSteal',
  description: 'Submit feature requests for KC LifeSteal Minecraft server',
}

export default function FeatureRequestsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const { toast } = useToast() //removed line
  const [showSuccess, setShowSuccess] = useState(false)
  const webhookUrl = "https://discord.com/api/webhooks/1316036029651746899/hlwq1jl_zrm-3KRbrQ4hy91JbU07-mv6qeNczjV9b4LhIxxSJzD8INrCRPjXY3AkDfeZ"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const email = formData.get('email') as string

    // Enhanced sanitization to remove all possible Discord mentions
    const sanitizeInput = (input: string) => {
      return input
        .replace(/@(everyone|here)/g, '') // Remove @everyone and @here
        .replace(/<@[!&]?\d+>/g, '') // Remove user and role mentions
        .replace(/@\d{17,20}/g, '') // Remove raw user IDs
        .replace(/\//g, '') // Remove forward slashes
        .replace(/@/g, '') // Remove any remaining @ symbols
    }

    const sanitizedTitle = sanitizeInput(title)
    const sanitizedDescription = sanitizeInput(description)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `**New Feature Request**\n**Title:** ${sanitizedTitle}\n**Description:** ${sanitizedDescription}\n**Contact Email:** ${email}`,
          allowed_mentions: { parse: [] } // Disable all mentions
        }),
      })

      if (response.ok) {
        setShowSuccess(true)
        e.currentTarget.reset()
      } else {
        console.error('Failed to submit feature request')
      }
    } catch (error) {
      console.error('Error submitting feature request:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
      <div className="container relative mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Feature Requests
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Help shape the future of KC LifeSteal by submitting your ideas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <Card className="border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50">
            <CardHeader>
              <CardTitle>Submit a Feature Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="title"
                    placeholder="Feature title"
                    required
                    className="bg-zinc-800/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="description"
                    placeholder="Describe your feature request in detail..."
                    required
                    className="min-h-[150px] bg-zinc-800/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="bg-zinc-800/50"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-100">How It Works</h2>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-start">
              <MessageSquare className="mr-2 h-5 w-5 text-purple-400" />
              Fill out the form above with your feature idea
            </li>
            <li className="flex items-start">
              <MessageSquare className="mr-2 h-5 w-5 text-purple-400" />
              Our team will review your suggestion
            </li>
            <li className="flex items-start">
              <MessageSquare className="mr-2 h-5 w-5 text-purple-400" />
              If approved, we'll add it to our development roadmap
            </li>
          </ul>
        </motion.div>
        <SuccessDialog
          show={showSuccess}
          message="Your feature request has been submitted successfully. Thank you for your suggestion!"
          onClose={() => setShowSuccess(false)}
        />
      </div>
    </div>
  )
}

