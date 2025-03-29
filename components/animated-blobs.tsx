"use client"

export function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
    </div>
  )
}

