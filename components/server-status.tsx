"use client"

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface ServerStatus {
  online: boolean
  players: number
}

export function ServerStatus() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<ServerStatus>({ online: false, players: 0 })

  useEffect(() => {
    // Simulated server status fetch
    const fetchStatus = () => {
      // Replace this with actual API call
      setStatus({ online: true, players: Math.floor(Math.random() * 100) })
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(50, 50)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: status.online ? 0x00ff00 : 0xff0000 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [status.online])

  return (
    <div className="flex items-center">
      <div ref={mountRef} className="w-[50px] h-[50px] mr-2" />
      <div>
        <p className="font-semibold">{status.online ? 'Online' : 'Offline'}</p>
        <p className="text-sm text-muted-foreground">{status.players} players</p>
      </div>
    </div>
  )
}

