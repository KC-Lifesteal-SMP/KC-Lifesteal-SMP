"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function MinecraftCursor() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(100, 100)
    mountRef.current.appendChild(renderer.domElement)

    const light = new THREE.AmbientLight(0xffffff, 1)
    scene.add(light)

    camera.position.z = 5

    let character: THREE.Object3D | null = null

    const loader = new GLTFLoader()
    loader.load('/models/minecraft_character.glb', (gltf) => {
      character = gltf.scene
      scene.add(character)
    })

    const animate = () => {
      requestAnimationFrame(animate)
      if (character) {
        character.rotation.y += 0.01
      }
      renderer.render(scene, camera)
    }

    animate()

    const handleMouseMove = (event: MouseEvent) => {
      if (character) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1
        character.position.x = mouseX * 2
        character.position.y = mouseY * 2
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed bottom-0 right-0 w-[100px] h-[100px] pointer-events-none" />
}

