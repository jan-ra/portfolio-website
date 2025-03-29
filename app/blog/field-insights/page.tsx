import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function BlogPostPage() {
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
            {/* --- Updated Title --- */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Yield Prediction Using Satellite Data and Machine Learning
            </h1>
            {/* --- Optional: Update or remove date --- */}
            <p className="text-muted-foreground">October 26, 2023</p>
          </div>

          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/crop-yield.png?height=600&width=1200&text=ESP8266+Environment+Sensor"
              alt="ESP8266 Environment Sensor"
              fill
              className="object-cover"
            />
          </div>

          {/* --- Replaced Content --- */}
          <div className="markdown">
            <p>
              Efficient water resource management in agriculture is a critical
              challenge, especially in the face of climate change and increasing
              freshwater demand. This article explores the technical aspects of
              a system designed to optimize agricultural practices by leveraging
              satellite data and machine learning models to predict crop yields.
              The system integrates environmental sensors, satellite imagery,
              and advanced data processing techniques to provide actionable
              insights for farmers.
            </p>

            <h2>System Architecture Overview</h2>
            <p>
              The system architecture is built around the integration of
              satellite data, environmental indices, and machine learning
              models. At its core, the system utilizes Google Earth Engine (GEE)
              for processing satellite imagery and extracting key environmental
              indices. These indices are then used to analyze soil moisture,
              vegetation health, and other critical factors that influence crop
              yield.
            </p>
            <p>
              The backend of the system is developed using Node.js, which serves
              as the intermediary between the satellite data processing pipeline
              and the app interface. The app, built using Flutter, provides
              real-time analytics and visualizations to end-users, enabling
              informed decision-making in agricultural management.
            </p>

            <h2>
              Leveraging Google Earth Engine for Soil Information Extraction
            </h2>
            <p>
              Google Earth Engine is a powerful cloud-based platform for
              geospatial analysis, offering access to a vast repository of
              satellite imagery and geospatial datasets. In this project, GEE
              was utilized to extract soil and vegetation information by
              computing environmental indices such as:
            </p>

            <h3>1. Normalized Difference Vegetation Index (NDVI)</h3>
            <p>
              NDVI is a widely used index for assessing vegetation health. It is
              calculated using the reflectance values of near-infrared (NIR) and
              red light bands:
            </p>
            {/* Formula Representation */}
            <div className="bg-muted p-4 rounded-md overflow-x-auto my-4">
              <code className="whitespace-pre">
                {"NDVI = (NIR - Red) / (NIR + Red)"}
              </code>
            </div>
            <p>
              Higher NDVI values indicate healthier vegetation, which is crucial
              for predicting crop yields.
            </p>

            <h3>2. Normalized Difference Water Index (NDWI)</h3>
            <p>
              NDWI is used to monitor water content in vegetation and soil. It
              is computed using the green and NIR bands:
            </p>
            {/* Formula Representation */}
            <div className="bg-muted p-4 rounded-md overflow-x-auto my-4">
              <code className="whitespace-pre">
                {"NDWI = (Green - NIR) / (Green + NIR)"}
              </code>
            </div>
            <p>
              This index helps in assessing soil moisture levels, which are
              vital for irrigation planning.
            </p>

            <h3>3. Enhanced Vegetation Index (EVI)</h3>
            <p>
              EVI improves upon NDVI by reducing atmospheric influences and
              accounting for canopy background signals. It is calculated as:
            </p>
            {/* Formula Representation */}
            <div className="bg-muted p-4 rounded-md overflow-x-auto my-4">
              <code className="whitespace-pre">
                {"EVI = G * (NIR - Red) / (NIR + C₁ * Red - C₂ * Blue + L)"}
              </code>
            </div>
            <p>
              where <em>G</em> is the gain factor, <em>C₁</em> and <em>C₂</em>{" "}
              are coefficients for aerosol resistance, and <em>L</em> is the
              canopy background adjustment.
            </p>
            <p>
              These indices were computed using satellite imagery from platforms
              such as Sentinel-2 and Landsat, which provide high-resolution data
              suitable for agricultural analysis. The processing pipeline in GEE
              involved filtering images based on cloud cover, selecting relevant
              spectral bands, and applying mathematical operations to derive the
              indices.
            </p>

            <h2>Data Processing and Analysis</h2>
            <p>
              The extracted indices were further processed to generate
              actionable insights. This involved:
            </p>
            <ul>
              <li>
                <strong>Temporal Analysis:</strong> Satellite data was analyzed
                over time to identify trends in vegetation health and soil
                moisture. This temporal analysis helped in understanding
                seasonal variations and predicting potential crop yields.
              </li>
              <li>
                <strong>Spatial Analysis:</strong> Spatial patterns of soil
                moisture and vegetation health were mapped to identify areas
                requiring intervention. This spatial analysis was critical for
                optimizing irrigation and resource allocation.
              </li>
              <li>
                <strong>Machine Learning Integration:</strong> The processed
                data was fed into machine learning models to predict crop
                yields. The ML4EARTH HACKATHON dataset was used for training and
                validating these models. Techniques such as feature engineering,
                dimensionality reduction, and hyperparameter tuning were
                employed to improve model accuracy.
              </li>
            </ul>

            <h2>Backend and App Integration</h2>
            <p>
              The backend, developed in Node.js, acted as the central hub for
              data processing and communication. It interfaced with GEE to
              retrieve satellite data, processed the data to compute indices,
              and stored the results in a database. The backend also provided
              APIs for the Flutter-based app, enabling real-time data
              visualization and analytics.
            </p>
            <p>
              The app was designed to be user-friendly, offering farmers
              insights into field conditions and crop yield predictions. Key
              features included:
            </p>
            <ul>
              <li>
                Interactive maps displaying soil moisture and vegetation health.
              </li>
              <li>Graphs showing temporal trends in environmental indices.</li>
              <li>
                Recommendations for irrigation and resource management based on
                predictive analytics.
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              This system represents a significant advancement in agricultural
              management by integrating satellite data, environmental indices,
              and machine learning models. The use of Google Earth Engine for
              soil information extraction ensures accurate and scalable
              analysis, while the backend and app provide a seamless interface
              for end-users. By leveraging these technologies, the system offers
              a data-driven approach to optimizing water resource use and
              enhancing crop yields, addressing the challenges posed by climate
              change and increasing freshwater demand.
            </p>
          </div>
          {/* --- End of Replaced Content --- */}
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
