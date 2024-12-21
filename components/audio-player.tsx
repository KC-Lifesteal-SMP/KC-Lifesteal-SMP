"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const tracks = [
  {
    title: "Soldier",
    artist: "Neffe",
    file: "https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/refs/heads/main/music/music1.mp3",
    cover: "https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/main/img/cover1.png"
  },
  {
    title: "Spectre",
    artist: "Alan Walker",
    file: "https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/refs/heads/main/music/music2.mp3",
    cover: "https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/main/img/cover2.png"
  },
  {
    title: "Born A Rockstar",
    artist: "Neffex",
    file: "https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/refs/heads/main/music/music3.mp3",
    cover: "https://raw.githubusercontent.com/KC-Lifesteal-SMP/KC-Lifesteal-SMP/main/img/cover3.png"
  }
]

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isExpanded, setIsExpanded] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio()
    audio.crossOrigin = "anonymous"
    audioRef.current = audio

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoading(false)
    }

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleEnded = () => handleNext()

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.pause()
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].file
      audioRef.current.load()
      setIsLoading(true)
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error)
          setIsPlaying(false)
        })
      }
    }
  }, [currentTrack, isPlaying])

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch(error => {
          console.error("Error playing audio:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1))
  }

  const handleTimeChange = (newTime: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime[0]
      setCurrentTime(newTime[0])
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0]
      setVolume(newVolume[0])
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-80 bg-gradient-to-t from-black to-zinc-900/90 backdrop-blur-md border border-zinc-800/50 rounded-lg p-4 shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={tracks[currentTrack].cover}
                  alt={tracks[currentTrack].title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg font-semibold truncate">{tracks[currentTrack].title}</h3>
                <p className="text-zinc-400 text-sm truncate">{tracks[currentTrack].artist}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-zinc-400 w-10">{formatTime(currentTime)}</span>
                <Slider
                  value={[currentTime]}
                  max={duration || 1}
                  step={1}
                  onValueChange={handleTimeChange}
                  className="flex-grow"
                  disabled={isLoading}
                />
                <span className="text-xs text-zinc-400 w-10 text-right">{formatTime(duration)}</span>
              </div>

              <div className="flex justify-between items-center">
                <Button variant="ghost" size="icon" onClick={handlePrevious} disabled={isLoading}>
                  <SkipBack className="h-6 w-6 text-zinc-400" />
                </Button>
                <Button variant="ghost" size="icon" onClick={togglePlay} disabled={isLoading}>
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" onClick={handleNext} disabled={isLoading}>
                  <SkipForward className="h-6 w-6 text-zinc-400" />
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                {volume === 0 ? (
                  <VolumeX className="h-4 w-4 text-zinc-400" />
                ) : (
                  <Volume2 className="h-4 w-4 text-zinc-400" />
                )}
                <Slider
                  value={[volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="flex-grow"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 rounded-full shadow-lg"
      >
        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </Button>
    </motion.div>
  )
}

