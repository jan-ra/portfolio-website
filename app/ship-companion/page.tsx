import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCarousel } from "@/components/feature-carousel";
import { ThemeToggle } from "@/components/theme-toggle";
import { PopoverButton } from "@/components/popover-button"; // Import the PopoverButton component
import { Monitor, ClipboardList, MapPin, Users } from "lucide-react"; // Icons for features

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
        <section className="relative w-full py-8 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted">
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

        {/* Features Section Above Carousel */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore the key features that make Ship Companion the perfect
                  tool for maritime operations.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impressions Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Impressions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover what makes Ship Companion the essential tool for
                  maritime operations.
                </p>
              </div>

              <div className="mt-12">
                <FeatureCarousel features={features} />
              </div>
            </div>
          </div>
        </section>

        {/* Customers Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-muted">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-8 justify-center">
              {/* Customer Cards */}
              {["Ambiance", "Allure"].map((customer, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-md max-w-[300px] mx-auto"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={`/icon_${customer.toLowerCase()}.png`}
                      alt={`${customer} Version`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                      Coming soon
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{customer}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {customer === "Ambiance"
                        ? "Customized for international container shipping with advanced route optimization and fuel efficiency tracking."
                        : "Specialized in sustainable shipping practices with carbon footprint tracking and emission reduction tools."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {/* Use the PopoverButton here */}
                      <PopoverButton />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ship Companion Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
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
                  <Monitor className="h-6 w-6" />
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
                  <ClipboardList className="h-6 w-6" />
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
                  <Users className="h-6 w-6" />
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
        <section className="w-full py-8 md:py-16 lg:py-20 bg-muted">
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
    icon: <Monitor className="h-6 w-6" />,
    image: "/cabinplan.PNG?height=600&width=800&text=Ship+Companion",
  },
  {
    title: "Checklists",
    description:
      "Efficiently manage cargo manifests, loading plans, and inventory across your entire fleet.",
    icon: <ClipboardList className="h-6 w-6" />,
    image: "/checklist.PNG?height=600&width=800&text=Ship+Companion",
  },
  {
    title: "Custom Offline Harbour Cards",
    description:
      "Calculate the most efficient routes based on weather conditions, fuel consumption, and delivery schedules.",
    icon: <MapPin className="h-6 w-6" />,
    image: "/harbour.PNG?height=600&width=800&text=Ship+Companion",
  },
  {
    title: "Recipes that work for big groups",
    description:
      "Keep your fleet in optimal condition with automated maintenance alerts and scheduling.",
    icon: <Users className="h-6 w-6" />,
    image: "/recipies.PNG?height=600&width=800&text=Ship+Companion",
  },
];
