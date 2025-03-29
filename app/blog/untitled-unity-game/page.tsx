import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

export default function NebulaVoyagerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 md:px-6 border-b">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            ramdohr.dev
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <article className="container px-4 md:px-6 max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl m-0">
                Nebula Voyager: Game Development Preview
              </h1>
              <Badge className="bg-amber-500 hover:bg-amber-600">In Development</Badge>
            </div>
            <p className="text-muted-foreground">Last Updated: November 8, 2023</p>
          </div>

          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Nebula+Voyager+Game"
              alt="Nebula Voyager Game"
              fill
              className="object-cover"
            />
          </div>

          <div className="markdown">
            <h2>Project Overview</h2>
            <p>
              Nebula Voyager is an upcoming space exploration game I'm developing using the Fodor game engine. It
              combines elements of resource management, exploration, and narrative-driven gameplay in a procedurally
              generated universe. This project represents my first major foray into game development, allowing me to
              combine my programming skills with my passion for science fiction and astronomy.
            </p>

            <div className="bg-muted p-4 rounded-lg mb-8">
              <p className="font-medium text-lg mb-2">Development Status: Alpha Stage</p>
              <p className="text-muted-foreground">
                Nebula Voyager is currently in active development with core mechanics implemented and undergoing
                testing. This article provides a preview of the current state and future plans for the game.
              </p>
            </div>

            <h2>Game Concept</h2>
            <p>
              In Nebula Voyager, players take on the role of a deep space explorer piloting a customizable spacecraft
              through a vast, procedurally generated universe. The game focuses on three core pillars:
            </p>
            <ul>
              <li>
                <strong>Exploration:</strong> Discover unique star systems, planets, and anomalies, each with their own
                characteristics and challenges
              </li>
              <li>
                <strong>Resource Management:</strong> Collect and manage resources to upgrade your ship, maintain life
                support, and fuel your journey
              </li>
              <li>
                <strong>Narrative Discovery:</strong> Uncover the history of an ancient civilization through artifacts
                and ruins scattered throughout the galaxy
              </li>
            </ul>

            <p>
              Unlike many space games that focus primarily on combat, Nebula Voyager emphasizes discovery, scientific
              research, and survival in the harsh environment of deep space.
            </p>

            <h2>Technical Implementation</h2>
            <p>
              Developing Nebula Voyager has been a significant technical challenge, involving several complex systems:
            </p>
            <ul>
              <li>
                <strong>Procedural Generation:</strong> Custom algorithms for creating diverse star systems, planets,
                and space phenomena
              </li>
              <li>
                <strong>Physics Simulation:</strong> Realistic orbital mechanics and spacecraft movement using the Fodor
                engine's physics system
              </li>
              <li>
                <strong>Resource Systems:</strong> Interconnected resource management for ship systems, life support,
                and exploration equipment
              </li>
              <li>
                <strong>Visual Effects:</strong> Custom shaders for space environments, planetary atmospheres, and
                stellar phenomena
              </li>
              <li>
                <strong>AI Ecosystems:</strong> Simulated alien life forms with behavioral patterns based on their
                environment
              </li>
            </ul>

            <h2>Current Progress</h2>
            <p>After eight months of development, several key systems are now functional:</p>
            <ul>
              <li>Core spacecraft control and physics</li>
              <li>Procedural star system generation</li>
              <li>Basic planetary environments with different biomes</li>
              <li>Resource collection and management systems</li>
              <li>Ship upgrade and customization interface</li>
              <li>Initial narrative elements and discovery mechanics</li>
            </ul>

            <h3>Technical Challenges</h3>
            <p>The development process has presented several interesting technical challenges:</p>
            <ul>
              <li>
                <strong>Scale Management:</strong> Creating a system that can represent both vast interstellar distances
                and detailed planetary surfaces
              </li>
              <li>
                <strong>Performance Optimization:</strong> Balancing procedural detail with performance constraints,
                especially for seamless planet-to-space transitions
              </li>
              <li>
                <strong>Coherent Procedural Generation:</strong> Ensuring that randomly generated elements form
                coherent, believable environments
              </li>
              <li>
                <strong>Physics Stability:</strong> Managing complex physics interactions without introducing
                instability or unrealistic behavior
              </li>
            </ul>

            <h2>Visual Design</h2>
            <p>
              Nebula Voyager features a distinctive visual style that blends realistic space phenomena with stylized
              artistic elements:
            </p>
            <ul>
              <li>Vibrant nebulae and cosmic phenomena inspired by actual astronomical imagery</li>
              <li>Stylized planetary surfaces with unique color palettes for different world types</li>
              <li>Dynamic lighting effects from multiple star types (red dwarfs, blue giants, binary systems)</li>
              <li>Minimalist UI design focused on immersion and information clarity</li>
            </ul>

            <p>
              The art direction aims to capture the awe-inspiring nature of space exploration while maintaining visual
              clarity for gameplay elements.
            </p>

            <h2>Gameplay Features</h2>
            <h3>Exploration Mechanics</h3>
            <p>
              Players navigate through star systems using a combination of conventional engines and experimental "fold"
              technology for interstellar travel. Each star system contains:
            </p>
            <ul>
              <li>Multiple planets with unique characteristics based on their composition and distance from stars</li>
              <li>Asteroid fields with valuable resources and hidden dangers</li>
              <li>Anomalies that offer unique research opportunities and narrative elements</li>
              <li>Derelict spacecraft and stations with salvageable technology</li>
            </ul>

            <h3>Ship Customization</h3>
            <p>
              The player's spacecraft serves as both transportation and a mobile base of operations. Key customization
              areas include:
            </p>
            <ul>
              <li>Engine systems for different movement capabilities</li>
              <li>Sensor arrays for detection and analysis of phenomena</li>
              <li>Resource processing and storage modules</li>
              <li>Life support and habitat sections</li>
              <li>Research laboratories for studying discoveries</li>
            </ul>

            <h3>Narrative Elements</h3>
            <p>
              Throughout their journey, players will uncover fragments of a story about an ancient civilization that
              once spanned the galaxy. This narrative unfolds through:
            </p>
            <ul>
              <li>Artifact discovery and analysis</li>
              <li>Deciphering alien language and technology</li>
              <li>Exploring ruins on distant worlds</li>
              <li>Piecing together the history and fate of this vanished species</li>
            </ul>

            <h2>Development Roadmap</h2>
            <p>The current development roadmap includes:</p>
            <ul>
              <li>
                <strong>Q1 2024:</strong> Expanded planetary exploration with more diverse environments and life forms
              </li>
              <li>
                <strong>Q2 2024:</strong> Enhanced narrative system with branching discovery paths
              </li>
              <li>
                <strong>Q3 2024:</strong> Advanced ship customization with visual changes reflecting functional upgrades
              </li>
              <li>
                <strong>Q4 2024:</strong> Beta testing phase with limited public access
              </li>
              <li>
                <strong>2025:</strong> Full release with additional content updates planned post-launch
              </li>
            </ul>

            <h2>Learning Experience</h2>
            <p>Developing Nebula Voyager has been an incredible learning journey, expanding my skills in:</p>
            <ul>
              <li>Game design principles and balancing gameplay systems</li>
              <li>3D modeling and shader programming</li>
              <li>Procedural content generation techniques</li>
              <li>Performance optimization for complex simulations</li>
              <li>Narrative design and environmental storytelling</li>
            </ul>

            <p>
              As development continues, I'll be sharing more updates and insights into the process. If you're interested
              in following the project's progress or potentially participating in future testing phases, feel free to{" "}
              <Link href="/contact">contact me</Link>.
            </p>
          </div>
        </article>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} ramdohr.dev. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

