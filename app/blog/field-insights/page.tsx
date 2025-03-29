import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CropSightPage() {
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
              CropSight: Satellite Data Analysis for Agricultural Optimization
            </h1>
            <p className="text-muted-foreground">September 12, 2022</p>
          </div>

          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=CropSight+Satellite+Analysis"
              alt="CropSight Satellite Analysis"
              fill
              className="object-cover"
            />
          </div>

          <div className="markdown">
            <h2>Project Background</h2>
            <p>
              CropSight was developed as a collaborative project with a team of four specialists in machine learning,
              remote sensing, agronomy, and software development. Our goal was to create an accessible tool that would
              allow farmers and agricultural consultants to leverage satellite imagery for optimizing crop management
              without requiring expertise in remote sensing or data science.
            </p>

            <h2>The Challenge</h2>
            <p>
              Modern agriculture faces increasing pressure to produce more food with fewer resources while minimizing
              environmental impact. Satellite data offers valuable insights, but several barriers prevent widespread
              adoption:
            </p>
            <ul>
              <li>Raw satellite imagery requires significant processing to extract actionable information</li>
              <li>
                Most existing solutions are either too expensive for small to medium farms or too complex for
                non-specialists to use effectively
              </li>
              <li>Translating satellite data into specific management actions requires agronomic expertise</li>
              <li>
                Timely analysis is critical for in-season decision-making, but processing delays often reduce usefulness
              </li>
            </ul>

            <h2>Our Solution</h2>
            <p>
              CropSight addresses these challenges through an integrated platform that combines satellite data
              processing with agronomic intelligence:
            </p>
            <ul>
              <li>
                <strong>Automated Data Acquisition:</strong> Integration with multiple satellite sources (Sentinel-2,
                Landsat, Planet) for regular field monitoring
              </li>
              <li>
                <strong>Advanced Image Processing:</strong> Cloud detection, atmospheric correction, and spectral index
                calculation (NDVI, NDRE, NDWI, etc.)
              </li>
              <li>
                <strong>Machine Learning Analysis:</strong> Crop health classification, yield prediction, and anomaly
                detection
              </li>
              <li>
                <strong>Actionable Recommendations:</strong> Translation of data insights into specific management
                actions for irrigation, fertilization, and pest control
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Interactive maps and simple reporting designed for farmers and
                agronomists
              </li>
            </ul>

            <h2>Technical Implementation</h2>
            <p>
              As the lead developer on the project, I was responsible for architecting and implementing the
              application's core functionality:
            </p>
            <ul>
              <li>
                <strong>Backend:</strong> Python with Django for the API, with specialized libraries (rasterio,
                scikit-learn, xarray) for geospatial processing
              </li>
              <li>
                <strong>Frontend:</strong> React with Mapbox GL for interactive mapping and data visualization
              </li>
              <li>
                <strong>Data Pipeline:</strong> Automated workflows using Airflow for satellite data acquisition and
                processing
              </li>
              <li>
                <strong>Machine Learning:</strong> Custom models for crop classification and yield prediction, deployed
                using TensorFlow Serving
              </li>
              <li>
                <strong>Infrastructure:</strong> Containerized deployment on AWS with auto-scaling for
                processing-intensive tasks
              </li>
            </ul>

            <h2>My Contribution</h2>
            <p>Within our collaborative team, I focused on several key aspects:</p>
            <ul>
              <li>Designing the system architecture to handle large geospatial datasets efficiently</li>
              <li>Implementing the satellite data processing pipeline with optimizations for speed and accuracy</li>
              <li>Developing the API layer connecting the frontend with processing and analysis services</li>
              <li>Creating interactive visualization components for complex agricultural data</li>
              <li>Ensuring the system remained accessible to users with limited technical expertise</li>
            </ul>

            <h2>Results and Impact</h2>
            <p>CropSight was piloted with 12 farms across different agricultural regions, with impressive results:</p>
            <ul>
              <li>15-20% reduction in fertilizer usage through more targeted application</li>
              <li>
                Early detection of irrigation issues and pest problems, preventing yield losses estimated at 8-12%
              </li>
              <li>Improved harvest timing decisions based on crop maturity mapping</li>
              <li>Simplified compliance reporting for environmental regulations</li>
            </ul>

            <p>
              One particularly successful case involved a 500-hectare wheat farm that identified a developing nutrient
              deficiency pattern invisible from ground level. Targeted intervention saved an estimated 30% of potential
              yield loss in the affected areas.
            </p>

            <h2>Challenges and Lessons</h2>
            <p>The project presented several significant challenges:</p>
            <ul>
              <li>
                <strong>Data Variability:</strong> Dealing with inconsistent satellite imagery due to cloud cover and
                varying acquisition parameters
              </li>
              <li>
                <strong>Performance Optimization:</strong> Balancing processing thoroughness with the need for timely
                results
              </li>
              <li>
                <strong>Knowledge Translation:</strong> Converting technical analysis into practical recommendations
                understandable by farmers
              </li>
              <li>
                <strong>Regional Adaptation:</strong> Adjusting algorithms for different crops, growing conditions, and
                agricultural practices
              </li>
            </ul>

            <p>
              These challenges taught valuable lessons about the importance of user-centered design in technical
              applications and the need for flexible, adaptable systems when working with environmental data.
            </p>

            <h2>Future Development</h2>
            <p>CropSight continues to evolve with several planned enhancements:</p>
            <ul>
              <li>Integration with ground-based IoT sensors for calibration and validation</li>
              <li>Expanded crop type support beyond the initial focus on cereal crops</li>
              <li>Advanced predictive modeling for pest and disease risk</li>
              <li>Mobile application for in-field data access and validation</li>
              <li>API for integration with farm management and machinery systems</li>
            </ul>

            <p>
              The project demonstrates how satellite technology, when properly processed and presented, can make
              precision agriculture accessible to a broader range of farmers, contributing to both economic and
              environmental sustainability.
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

