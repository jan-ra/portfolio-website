import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCarousel } from "@/components/feature-carousel";
import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
// import { LanguageSwitcher } from "@/components/language-switcher"

export default function ShipCompanionPage() {
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
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ship Companion
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your custom app for your ship to better communicate with
                    your guests and make them feel safer.
                  </p>
                </div>
              </div>
              <Image
                src="/header.webp?height=600&width=800&text=Ship+Companion"
                width="600"
                height="400"
                alt="Ship Companion App"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover what makes Ship Companion the essential tool for
                  maritime operations.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <FeatureCarousel features={features} />
            </div>
          </div>
        </section>

        {/* Customer Versions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Make the App Your Own
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Ship Companion is a white label solution customized for
                  various maritime companies. Explore the different versions
                  we've built for our clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Customer 1 */}
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=OceanFleet+Version"
                    alt="OceanFleet Version"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ambiance</h3>
                  <p className="text-muted-foreground mb-4">
                    Customized for international container shipping with
                    advanced route optimization and fuel efficiency tracking.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                      iOS App
                    </Link>
                    <Link
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="2 3 2 21 12 12 2 3" />
                        <polygon points="14 3 14 21 22 12 14 3" />
                      </svg>
                      Android App
                    </Link>
                  </div>
                </div>
              </div>

              {/* Customer 2 */}
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=NordicShipping+Version"
                    alt="Nordic Shipping Version"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    Eco-Focused
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Allure</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized in sustainable shipping practices with carbon
                    footprint tracking and emission reduction tools.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                      iOS App
                    </Link>
                    <Link
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="2 3 2 21 12 12 2 3" />
                        <polygon points="14 3 14 21 22 12 14 3" />
                      </svg>
                      Android App
                    </Link>
                  </div>
                </div>
              </div>

              {/* Customer 3 */}
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=MediterraneanCargo+Version"
                    alt="Avondrood"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Regional
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Avondrood</h3>
                  <p className="text-muted-foreground mb-4">
                    Tailored for Mediterranean shipping routes with local port
                    regulations, weather patterns, and regional logistics.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                      iOS App
                    </Link>
                    <Link
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="2 3 2 21 12 12 2 3" />
                        <polygon points="14 3 14 21 22 12 14 3" />
                      </svg>
                      Android App
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ship Companion Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why I Built Ship Companion
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Combining technical expertise with maritime industry knowledge
                  to create the perfect solution
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 4h20v16H2z"></path>
                    <path d="M6 8h4"></path>
                    <path d="M14 8h4"></path>
                    <path d="M6 12h4"></path>
                    <path d="M14 12h4"></path>
                    <path d="M6 16h4"></path>
                    <path d="M14 16h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Industry Gap</h3>
                <p className="text-muted-foreground">
                  After 10+ years working in maritime logistics, I identified a
                  critical gap between existing software solutions and the
                  actual needs of shipping professionals. Ship Companion was
                  built to address these real-world challenges with practical,
                  user-focused tools.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Hands-On Experience</h3>
                <p className="text-muted-foreground">
                  My background includes direct experience as a logistics
                  coordinator and fleet manager. This firsthand knowledge of
                  maritime operations means Ship Companion is designed by
                  someone who truly understands the daily challenges and
                  workflows of your team.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Client Partnerships</h3>
                <p className="text-muted-foreground">
                  Each version of Ship Companion is developed through close
                  collaboration with clients. My approach combines technical
                  development with maritime consulting, ensuring the solution
                  not only meets technical requirements but also aligns
                  perfectly with operational needs.
                </p>
              </div>
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

// Sample features data
const features = [
  {
    title: "Cabin planning",
    description:
      "Monitor your fleet's position and status in real-time with advanced GPS integration.",
    image: "/cabinplan.PNG?height=600&width=800&text=Real-time+Tracking",
  },
  {
    title: "Checklists",
    description:
      "Efficiently manage cargo manifests, loading plans, and inventory across your entire fleet.",
    image: "/checklist.PNG?height=600&width=800&text=Cargo+Management",
  },
  {
    title: "Cusomt Offline Harbour Cards",
    description:
      "Calculate the most efficient routes based on weather conditions, fuel consumption, and delivery schedules.",
    image: "/harbour.PNG?height=600&width=800&text=Route+Optimization",
  },
  {
    title: "Recipies that work for big groups",
    description:
      "Keep your fleet in optimal condition with automated maintenance alerts and scheduling.",
    image: "/recipies.PNG?height=600&width=800&text=Maintenance+Scheduling",
  },
];
