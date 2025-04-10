import type { Metadata } from "next"
import { SonnerProvider } from "@/components/sonner-provider"
import { ModelBuilderClient } from "@/components/model-builder-client"

export const metadata: Metadata = {
  title: "NeuroForge - Visual AI Model Builder",
  description: "Build, configure, and train neural networks in your browser",
}

export default function HomePage() {
  return (
    <>
      <SonnerProvider />
      <ModelBuilderClient />
    </>
  )
}

