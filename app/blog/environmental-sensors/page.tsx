import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function EnvironmentalSensorPage() {
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
              Environmental Sensor Network: Master Thesis Project
            </h1>
            <p className="text-muted-foreground">April 3, 2023</p>
          </div>

          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Environmental+Sensor+Network"
              alt="Environmental Sensor Network"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-center mb-8">
            <Link
              href="https://github.com/yourusername/environmental-sensors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <Github className="h-5 w-5" />
                View Project on GitHub
              </Button>
            </Link>
          </div>

          <div className="markdown">
            <h2>Project Overview</h2>
            <p>
              For my master's thesis in Environmental Engineering, I designed and implemented a network of IoT sensors
              to monitor environmental conditions in urban green spaces. The project aimed to collect real-time data on
              air quality, soil moisture, temperature, and light exposure to better understand the microclimate factors
              affecting urban vegetation.
            </p>

            <h2>The Problem</h2>
            <p>
              Urban green spaces face numerous challenges, from pollution to inadequate maintenance. Traditional
              monitoring methods are labor-intensive and provide only periodic snapshots rather than continuous data. My
              research identified several key issues:
            </p>
            <ul>
              <li>Limited understanding of microclimate variations within urban environments</li>
              <li>Difficulty correlating environmental factors with plant health</li>
              <li>Inefficient resource allocation for irrigation and maintenance</li>
              <li>Lack of accessible data for urban planning decisions</li>
            </ul>

            <h2>Technical Implementation</h2>
            <p>
              The sensor network consisted of multiple nodes deployed across three urban parks in Berlin. Each node
              included:
            </p>
            <ul>
              <li>
                <strong>Hardware:</strong> Arduino-based microcontrollers with custom PCB designs
              </li>
              <li>
                <strong>Sensors:</strong> BME280 (temperature, humidity, pressure), SPS30 (particulate matter),
                capacitive soil moisture sensors, and light intensity sensors
              </li>
              <li>
                <strong>Power:</strong> Solar panels with LiPo battery backup for sustainable operation
              </li>
              <li>
                <strong>Connectivity:</strong> LoRaWAN for low-power, long-range data transmission
              </li>
            </ul>

            <p>The software stack included:</p>
            <ul>
              <li>
                <strong>Embedded Firmware:</strong> C++ for Arduino with power optimization
              </li>
              <li>
                <strong>Backend:</strong> Python with Flask for API services and data processing
              </li>
              <li>
                <strong>Database:</strong> InfluxDB for time-series data storage
              </li>
              <li>
                <strong>Visualization:</strong> Custom dashboard built with React and D3.js
              </li>
            </ul>

            <h2>Challenges and Solutions</h2>
            <h3>Power Management</h3>
            <p>
              Ensuring continuous operation without frequent battery replacements was a significant challenge. I
              implemented an adaptive power management system that adjusted sampling frequency based on battery levels
              and environmental conditions. During periods of low light, the system would reduce sampling rates to
              conserve energy.
            </p>

            <h3>Environmental Hardening</h3>
            <p>
              Outdoor deployment required protection against weather, vandalism, and wildlife. I designed custom
              enclosures using 3D printing with weather-resistant materials. The enclosures included passive cooling
              systems to prevent overheating during summer months.
            </p>

            <h3>Data Reliability</h3>
            <p>
              Sensor drift and occasional connectivity issues threatened data integrity. To address this, I implemented:
            </p>
            <ul>
              <li>Sensor fusion algorithms to cross-validate readings</li>
              <li>Local data buffering to handle connectivity interruptions</li>
              <li>Automated calibration routines based on reference measurements</li>
            </ul>

            <h2>Research Findings</h2>
            <p>The six-month deployment yielded several interesting findings:</p>
            <ul>
              <li>
                Microclimate variations within parks were much more significant than expected, with temperature
                differences of up to 8°C between locations just 50 meters apart
              </li>
              <li>
                Soil moisture levels correlated strongly with canopy density, but with unexpected seasonal variations
              </li>
              <li>
                Air quality showed distinct patterns related to traffic flow, with measurable improvements in areas with
                mature tree coverage
              </li>
              <li>
                Light exposure patterns revealed optimal locations for different plant species based on their specific
                requirements
              </li>
            </ul>

            <h2>Impact and Applications</h2>
            <p>The project has had several practical applications:</p>
            <ul>
              <li>
                The Berlin Parks Department used the data to optimize irrigation schedules, reducing water usage by
                approximately 30%
              </li>
              <li>
                Urban planners incorporated findings into the design of a new green space, selecting plant species based
                on microclimate data
              </li>
              <li>
                The open-source hardware and software designs have been adopted by two other European cities for similar
                monitoring projects
              </li>
              <li>
                The research contributed to a broader understanding of urban heat island effects and mitigation
                strategies
              </li>
            </ul>

            <h2>Future Development</h2>
            <p>While the initial research project has concluded, development continues in several directions:</p>
            <ul>
              <li>Integration with irrigation systems for automated, data-driven watering</li>
              <li>Expanded sensor types to include noise pollution and biodiversity indicators</li>
              <li>Machine learning models to predict maintenance needs based on environmental trends</li>
              <li>
                Community science initiatives allowing citizens to deploy compatible sensors and contribute to the
                dataset
              </li>
            </ul>

            <p>
              The project's code and hardware designs are available on{" "}
              <a href="https://github.com/yourusername/environmental-sensors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              under an open-source license. I welcome contributions and adaptations for different environmental
              monitoring applications.
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

