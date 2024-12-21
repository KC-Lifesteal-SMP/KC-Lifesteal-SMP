"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SuccessDialogProps {
  show: boolean
  message: string
  onClose: () => void
}

export function SuccessDialog({ show, message, onClose }: SuccessDialogProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            className="bg-zinc-900 rounded-2xl p-6 shadow-xl border border-zinc-800/50 max-w-sm w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-white">Success!</h2>
              <p className="text-zinc-400">{message}</p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

