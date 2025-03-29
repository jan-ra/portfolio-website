import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function EnvironmentalSensorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 md:px-6 border-b">
        <div className="container flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold hover:text-primary transition-colors"
          >
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
              Developing a Custom ESP8266-Based Environment Sensor: A Technical
              Deep Dive
            </h1>
            <p className="text-muted-foreground">April 3, 2023</p>
          </div>

          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/sensor.png?height=600&width=1200&text=ESP8266+Environment+Sensor"
              alt="ESP8266 Environment Sensor"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-center mb-8">
            <Link
              href="https://github.com/jan-ra/ESP8266-environment-sensor"
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
            <h2>Conceptualizing the Sensor</h2>
            <p>
              The idea was simple: build a compact, reliable, and customizable
              sensor that could collect environmental data in real-time. The
              ESP8266 microcontroller was the obvious choice for this project
              due to its affordability, versatility, and built-in WiFi
              capabilities. However, the ESP8266 couldn’t connect to the
              university’s eduroam network, so I had to rely on local data
              storage using a micro SD card.
            </p>
            <p>
              The sensor needed to measure three key parameters: sound levels,
              light intensity, and nearby devices (as a proxy for occupancy).
              Each of these measurements required careful hardware selection and
              software configuration.
            </p>

            <h2>Hardware Design</h2>
            <p>
              The hardware setup was built around the{" "}
              <strong>NodeMCU ESP8266 12.0</strong>, which served as the central
              processing unit. Here’s a breakdown of the components I used:
            </p>
            <ul>
              <li>
                <strong>Sound Sensor: MAX9814</strong> - Measures sound pressure
                levels, which can be converted into decibels. Calibration was
                required to ensure accurate readings.
              </li>
              <li>
                <strong>Light Sensor: BH1750FVI</strong> - Measures ambient
                light intensity using I2C communication. A light ball diffuser
                was added for consistent readings.
              </li>
              <li>
                <strong>Device Counting:</strong> The ESP8266 was put into
                promiscuous mode to detect WiFi probe requests and estimate
                occupancy levels.
              </li>
              <li>
                <strong>Micro SD Card Adapter:</strong> Used for local data
                storage, with encrypted files for security.
              </li>
            </ul>

            <h2>Software Implementation</h2>
            <p>
              The software for the sensor was developed using{" "}
              <a
                href="https://platformio.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PlatformIO
              </a>{" "}
              in VSCode. Here’s a breakdown of the key features:
            </p>
            <ul>
              <li>
                <strong>Data Collection:</strong> The ESP8266 collected data
                from the sensors every minute and stored it on the SD card in
                encrypted form.
              </li>
              <li>
                <strong>Sound Level Calculation:</strong> Raw voltage readings
                from the MAX9814 were converted into decibels using a
                logarithmic formula.
              </li>
              <li>
                <strong>Light Intensity Measurement:</strong> The BH1750FVI
                provided readings in lux, which were directly written to the SD
                card.
              </li>
              <li>
                <strong>Device Counting:</strong> WiFi probe requests were
                detected and processed to estimate occupancy levels.
              </li>
              <li>
                <strong>Data Encryption:</strong> AES encryption was used to
                secure the data, with a Python script for decryption during
                analysis.
              </li>
            </ul>

            <h2>Data Processing and Analysis</h2>
            <p>
              Once the sensor had collected enough data, I transferred the
              encrypted files to my computer and decrypted them using the Python
              script. The data was then processed using statistical and machine
              learning techniques to uncover patterns and correlations.
            </p>
            <ul>
              <li>
                <strong>Sound Levels:</strong> Excessive noise negatively
                impacted comfort and focus, while moderate background noise was
                generally well-tolerated.
              </li>
              <li>
                <strong>Light Intensity:</strong> Brighter light levels were
                associated with more positive emotions, especially during group
                activities.
              </li>
              <li>
                <strong>Device Counts:</strong> Higher occupancy often created a
                lively atmosphere but could also lead to overcrowding and
                discomfort.
              </li>
            </ul>

            <h2>Challenges and Lessons Learned</h2>
            <p>
              This project wasn’t without its challenges. Here are a few key
              lessons I learned along the way:
            </p>
            <ul>
              <li>
                <strong>Hardware Compatibility:</strong> Not all SD card brands
                worked well with the ESP8266. Testing different options was
                essential for ensuring reliable data storage.
              </li>
              <li>
                <strong>Sensor Calibration:</strong> Calibrating the MAX9814
                microphone was tricky but crucial for accurate sound level
                measurements.
              </li>
              <li>
                <strong>Privacy Concerns:</strong> Implementing anonymized
                device counting required careful consideration to ensure no
                personal data was collected.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Building this custom ESP8266-based environment sensor was a
              rewarding technical challenge. From hardware design to software
              implementation and data analysis, the project pushed me to explore
              new technologies and problem-solving techniques. While the sensor
              was designed for a specific research purpose, its modular design
              and customizable features make it adaptable to other applications.
            </p>
            <p>
              If you’re interested in building your own environment sensor or
              have questions about the technical process, feel free to reach
              out. I’d be happy to share more details or help troubleshoot your
              setup!
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
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
