import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  ExternalLink,
  User,
  ArrowBigRight,
  MonitorSmartphone,
  BookOpenText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedBlobs } from "@/components/animated-blobs";

export default function Home() {
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
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <AnimatedBlobs />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
                <div className="w-full md:w-[30%] mb-6 md:mb-0 flex justify-center md:justify-end pr-0 md:pr-8">
                  <div className="w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src="/bear.svg"
                      alt="Logo"
                      width={128}
                      height={128}
                      className="w-full h-full text-black dark:text-gray-100 dark:invert"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[70%] text-left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Hi, I'm Jan
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
                    Welcome to my little corner of the internet. I am a software
                    dev and love to tinker with different stuff. - Feel free to
                    look around.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button size="lg" className="gap-2">
                    Learn more about me
                    <ArrowBigRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="w-full py-6 md:py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/jan-ra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/jan-ramdohr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  <BookOpenText className="h-5 w-5" />
                  My Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section - Reduced padding on larger screens */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Projects
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A selction of my work and side projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="rounded-md object-cover w-full h-48"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.readMore && (
                        <Link href={project.readMore}>
                          <Button size="sm">
                            <BookOpenText className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                      )}
                      {project.productPage && (
                        <Link href={project.productPage}>
                          <Button size="sm" variant="outline">
                            <MonitorSmartphone className="h-4 w-4 mr-2" />
                            View Project
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Interested in working together? Feel free to reach out.
                </p>
              </div>
              <Link href="mailto:info@ramdohr.dev">
                <Button className="mt-4">info@ramdohr.dev</Button>
              </Link>
            </div>
          </div>
        </section>
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

// Updated project data with the 4 specific projects
const projects = [
  {
    title: "Ship Companion",
    description:
      "A comprehensive application for managing and tracking shipping operations.",
    image: "/header.webp?height=400&width=800&text=Ship+Companion",
    tags: ["Dart", "Flutter", "Material Design", "OSM Tiles"],
    productPage: "/ship-companion",
    readMore: "/blog/ship-companion-case-study",
  },
  {
    title: "Environmental Sensing solution",
    description:
      "Selfmade IoT sensor for environmental monitoring developed as part of my master thesis.",
    image: "/sensor.png?height=400&width=800&text=Environmental+Sensors",
    tags: ["IoT", "ESP-2688", "C", "Data Visualization"],
    github: "https://github.com/yourusername/environmental-sensors",
    readMore: "/blog/environmental-sensor-network",
  },
  {
    title: "Crop yield prediction",
    description:
      "Case study and proof of concept implementation for satellite-based crop yield prediction.",
    image: "/crop-yield.png?height=400&width=800&text=CropSight",
    tags: ["Machine Learning", "Flutter", "Google Earth Engine"],
    readMore: "/blog/cropsight-satellite-analysis",
  },
  {
    title: "Untitled Bird Game",
    description:
      "I am currently working on a small Unity Game about bird migrations to get familiar with the engine",
    image: "/unity.jpg?height=400&width=800&text=Nebula+Voyager",
    tags: ["Unity Engine", "C#", "Blender", "Animation"],
    readMore: "/blog/nebula-voyager-preview",
  },
];
