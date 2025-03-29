import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Bed,
  CookingPot,
  ListChecks,
  Map,
  Ship,
} from "lucide-react";
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
                    A companion app for your sailing ship. Upgrade your guest
                    communications and provide guest with another to feel more
                    informed about their trip.
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
                  Explore the key features of Ship Companion.
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
                  Get a glimpse of how the app looks in action.
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
                  Ship Companion is a white label solution. This means it can be
                  easily customized to fit your ships identity. If you already
                  have a website most of the work is already done. Check the
                  examples to see how we fit the apps look and feel into the
                  already exisiting identiy of your ship.
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
                        ? "Sven of the Ambiance was an early adopter of the app and gave a lot of great input on how to design the features."
                        : "The Allure app was the first showcase that the app is able to work well for more than one ship."}
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
                  I have a unique overlap of knowing what guests need and want
                  on the ijselmeer and actually being able to put that into
                  software.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hesitant Guests</h3>
                <p className="text-muted-foreground">
                  Guest squisition is a common problem on the Ijselmeer. New
                  groups and organizers usually put a lot of trust into the crew
                  and the ships presentation when deciding to take on this new
                  kind of experience. The app can help ease that uncertainty by
                  providing a clear overview of the ship and its features. More
                  information in a clear way and the safteynet of available
                  tools before and during the trip can make the choice to go on
                  a trip way easier.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Ship className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hands-On Experience</h3>
                <p className="text-muted-foreground">
                  I have been a guest on multiple ships of the Ijseelmeer for
                  more than 10 years now. I have organized or just expericed the
                  sailing trips. Through these experiences I know what questions
                  guests ask over and over again. And I also know what
                  uncertaintiy keeps them up at night before commiting to a
                  trip.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Knowledge</h3>
                <p className="text-muted-foreground">
                  Developing a mobile app running on all the relevant operating
                  systems can be tricky and expensive. With my 8 years of
                  professional experience in building software I am able to
                  create a well working application that run smoothly and does
                  not need much upkeep. Ship companion runs completely local on
                  the guests device. No servers are needed. Things are less
                  prone to break.
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
      "Allow your guests to plan and share the cabin layout far in advance of their trip-",
    icon: <Bed className="h-6 w-6" />,
    image: "/cabinplan.PNG?height=600&width=800&text=Ship+Companion",
  },
  {
    title: "Checklists",
    description:
      "Give the guests security on what to bring on what to do on board and what to bring to the trip.",
    icon: <ListChecks className="h-6 w-6" />,
    image: "/checklist.PNG?height=600&width=800&text=Ship+Companion",
  },
  {
    title: "Custom Offline Harbour Cards",
    description:
      "Provide your guests with offline maps of all the relevant harbours and point out the places they should visit.",
    icon: <Map className="h-6 w-6" />,
    image: "/harbour.PNG?height=600&width=800&text=Ship+Companion",
  },
  {
    title: "Recipes that work for big groups",
    description:
      "Allow groups to plan the big meals they need to gain the streght to sail the ship. Reduce the stress of organizers.",
    icon: <CookingPot className="h-6 w-6" />,
    image: "/recipies.PNG?height=600&width=800&text=Ship+Companion",
  },
];
