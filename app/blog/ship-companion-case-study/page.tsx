import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ShipCompanionCaseStudyPage() {
  // Set a fixed date for the blog post
  const postDate = "February 12, 2025";

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
              Building Ship Companion: A No-Server Side Project Adventure
            </h1>
            {/* Use the fixed date string */}
            <p className="text-muted-foreground">{postDate}</p>
          </div>

          {/* You might want to update the image source and alt text */}
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/header.webp?height=600&width=1200&text=Ship+Companion+Blog" // Placeholder - update this
              alt="Ship Companion App Interface or Sailing Ship" // Update alt text
              fill
              className="object-cover"
            />
          </div>

          {/* Replaced content starts here */}
          <div className="markdown">
            <p>Hey everyone,</p>
            <p>
              I recently launched a little side project called Ship Companion,
              an app designed to help guests on traditional sailing ships,
              particularly those navigating the beautiful IJsselmeer in the
              Netherlands. This wasn't just about building another app; it was a
              personal journey driven by specific goals and constraints, and I
              wanted to share a bit about the process.
            </p>

            <h2>Spotting a Need (and a Personal Challenge)</h2>
            <p>
              Working alongside my day job, I was itching to build something
              tangible, something different. A key personal constraint I set
              was: <strong>no servers</strong>. My day-to-day often involves
              backend systems, and I wanted this project to be entirely
              client-side.
            </p>
            <p>
              Around the same time, I noticed a few things in the traditional
              sailing community. Firstly, many ships, despite offering amazing
              experiences, sometimes struggle to connect with new guests.
              Secondly, once guests <em>are</em> onboard, there's often a
              recurring pattern: skippers patiently explain the same details
              about harbours and points of interest trip after trip. It struck
              me that there wasn't really a dedicated app for any of these ships
              yet.
            </p>
            <p>
              Providing guests with easy access to information about the ship,
              the trip, and the locations visited could reduce uncertainty and
              enhance their experience. An offline map, accessible even when
              wandering around a harbour town without the skipper, seemed like a
              logical core feature.
            </p>

            <h2>Choosing the Tools: Flutter and... Google Sheets?</h2>
            <p>
              With the "no server" rule firmly in place and the need to support
              both iOS and Android, the tech stack started taking shape. I opted
              for <strong>Flutter</strong>. I have prior experience with it, and
              frankly, I wasn't keen on learning React Native from scratch for
              this side project. Flutter allows for a single codebase targeting
              both platforms effectively.
            </p>
            <p>
              Now, how do you get ship-specific data (like schedules, ship
              details, points of interest) into a serverless app, especially
              when you need an easy way for non-technical ship owners to update
              it? This needed a robust but simple{" "}
              <strong>onboarding pipeline</strong>. The solution? A surprisingly
              low-tech but effective one: a highly structured and validated{" "}
              <strong>Google Sheet</strong>. Skippers or owners can fill in
              their details in a familiar spreadsheet format. I then wrote a set
              of <strong>Python scripts</strong> to parse this sheet, validate
              the data rigorously, and convert it into configuration files that
              the Flutter app can bundle and read locally. It keeps the
              onboarding simple for them and manageable for me as a solo
              developer on the side.
            </p>

            <h2>The Big Technical Hurdle: Offline Maps Without the Bloat</h2>
            <p>
              The map feature was crucial, but it presented the biggest
              technical challenge under the "no server" constraint. How do you
              get detailed map data for the entire IJsselmeer region onto a
              user's phone without requiring a multi-gigabyte download or
              constant backend calls for map tiles?
            </p>
            <p>
              Standard offline map SDKs often download large regions or rely on
              tile servers. My solution was a bit more involved:
            </p>
            <ul>
              <li>
                <strong>Local Dev Server:</strong> During development, I set up
                a local OpenStreetMap (OSM) tile server.
              </li>
              <li>
                <strong>Hyperlocal Tile Generation:</strong> Using this server,
                I generated <em>very specific</em>, hyperlocal map tile
                packages. Instead of grabbing entire countries or large regions,
                I focused <em>only</em> on the relevant coastlines, harbours,
                and waterways of the IJsselmeer.
              </li>
              <li>
                <strong>Limited Zoom Levels:</strong> To drastically cut down on
                size, I only included tiles for two essential zoom levels: an
                overview level to see the general sailing area and a detailed
                city/harbour level for navigation on foot.
              </li>
              <li>
                <strong>Bundling:</strong> These pre-rendered, minimal tile sets
                are bundled directly within the app.
              </li>
            </ul>
            <p>
              This approach keeps the app size reasonable and ensures the core
              map functionality works entirely offline, fulfilling the no-server
              requirement.
            </p>

            <h2>Beyond the Code: The Full Product Lifecycle</h2>
            <p>
              This project wasn't just about coding. I explicitly wanted to
              experience the <em>entire</em> process of bringing a product to
              market, warts and all. This meant:
            </p>
            <ul>
              <li>
                Actually <strong>founding a small company</strong> (necessary
                legal structures).
              </li>
              <li>
                Navigating the sometimes-painful{" "}
                <strong>App Store and Google Play review processes</strong>.
              </li>
              <li>
                Creating basic <strong>marketing materials</strong>.
              </li>
            </ul>
            <p>
              It's easy to underestimate these steps when you're focused on the
              tech, but they are integral to shipping a real product.
            </p>

            <h2>Reflections</h2>
            <p>
              Building Ship Companion has been, and continues to be, an
              incredible learning experience. It's stretching me beyond pure
              software development into areas like business administration and
              marketing. There's a deep satisfaction in tackling these varied
              challenges and seeing an idea through to completion.
            </p>
            <p>
              It also feels great to give something back to the sailing
              community, a world where I've personally learned and experienced a
              lot. And honestly? It's been fantastic to just <em>build</em>{" "}
              again, driven by the enjoyment of the process itself, without the
              pressure of the project needing to be my primary source of income.
              It's reminded me why I fell in love with software development in
              the first place.
            </p>
            <p>Thanks for reading about the journey!</p>
          </div>
          {/* Replaced content ends here */}
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
