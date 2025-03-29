import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ShipCompanionCaseStudyPage() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ship Companion: A Case Study in Maritime Software Development
            </h1>
            <p className="text-muted-foreground">June 15, 2023</p>
          </div>

          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Ship+Companion+Header"
              alt="Ship Companion Application"
              fill
              className="object-cover"
            />
          </div>

          <div className="markdown">
            <h2>The Challenge</h2>
            <p>
              The maritime industry has long been plagued by outdated software solutions that fail to address the
              complex needs of modern shipping operations. When I began developing Ship Companion, I identified several
              key challenges:
            </p>
            <ul>
              <li>Fragmented systems requiring multiple applications to manage different aspects of operations</li>
              <li>Poor mobile experiences making it difficult for crew members to access critical information</li>
              <li>Limited real-time data synchronization between vessels and shore-based teams</li>
              <li>Inflexible solutions that couldn't be customized to specific operational requirements</li>
            </ul>

            <h2>The Solution</h2>
            <p>
              Ship Companion was designed as a comprehensive, modular platform that could be tailored to the specific
              needs of different maritime companies. The core application includes:
            </p>
            <ul>
              <li>
                <strong>Real-time Tracking:</strong> GPS integration for vessel positioning with historical route data
              </li>
              <li>
                <strong>Cargo Management:</strong> Digital manifests and loading plans with weight distribution
                calculations
              </li>
              <li>
                <strong>Route Optimization:</strong> Weather-aware routing with fuel consumption predictions
              </li>
              <li>
                <strong>Maintenance Scheduling:</strong> Preventative maintenance tracking with parts inventory
              </li>
              <li>
                <strong>Compliance Management:</strong> Regulatory document storage and expiration alerts
              </li>
            </ul>

            <p>
              What makes Ship Companion unique is its white-label approach. The platform can be fully customized and
              branded for each client, with modules enabled or disabled based on specific operational needs.
            </p>

            <h2>Technical Implementation</h2>
            <p>Ship Companion is built on a modern tech stack designed for reliability and performance:</p>
            <ul>
              <li>
                <strong>Frontend:</strong> React and Next.js for a responsive, performant user interface
              </li>
              <li>
                <strong>Backend:</strong> Node.js with Express for API services
              </li>
              <li>
                <strong>Database:</strong> MongoDB for flexible data storage with PostgreSQL for relational data
              </li>
              <li>
                <strong>Mobile:</strong> React Native for cross-platform mobile applications
              </li>
              <li>
                <strong>Deployment:</strong> Docker containers orchestrated with Kubernetes for scalability
              </li>
            </ul>

            <p>
              The application uses a microservices architecture, allowing for independent scaling of different
              components based on load. Offline functionality was a critical requirement, so we implemented robust data
              synchronization protocols to handle intermittent connectivity common in maritime environments.
            </p>

            <h2>Client Success Stories</h2>
            <p>Ship Companion has been successfully deployed across various maritime operations:</p>

            <h3>OceanFleet Solutions</h3>
            <p>
              A large container shipping company operating 50+ vessels globally. They reported a 15% reduction in fuel
              costs after implementing Ship Companion's route optimization features, and a 30% decrease in
              maintenance-related downtime through better preventative maintenance scheduling.
            </p>

            <h3>Nordic Shipping Co.</h3>
            <p>
              Focused on sustainable shipping practices, this client utilized Ship Companion's custom modules for carbon
              footprint tracking. They achieved certification as a green shipping provider, opening new market
              opportunities with environmentally conscious clients.
            </p>

            <h3>Mediterranean Cargo</h3>
            <p>
              A regional operator needed specialized features for Mediterranean port regulations. Their custom
              implementation included local weather pattern integration and regional logistics optimization, resulting
              in 20% faster port turnaround times.
            </p>

            <h2>Lessons Learned</h2>
            <p>
              Developing Ship Companion has taught me valuable lessons about creating software for specialized
              industries:
            </p>
            <ul>
              <li>Domain expertise is as important as technical skills when developing industry-specific solutions</li>
              <li>Modular design allows for customization without maintaining entirely separate codebases</li>
              <li>
                Offline-first thinking is essential for applications used in environments with unreliable connectivity
              </li>
              <li>
                Close collaboration with end-users throughout development leads to more practical, usable features
              </li>
            </ul>

            <h2>Future Development</h2>
            <p>Ship Companion continues to evolve with several exciting features on the roadmap:</p>
            <ul>
              <li>AI-powered predictive maintenance to further reduce vessel downtime</li>
              <li>Enhanced integration with IoT sensors for real-time equipment monitoring</li>
              <li>Augmented reality components for maintenance assistance and training</li>
              <li>Expanded regulatory compliance modules for international shipping requirements</li>
            </ul>

            <p>
              If you're interested in learning more about Ship Companion or discussing how it might be adapted for your
              maritime operations, please <Link href="/contact">contact me</Link> for a consultation.
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

