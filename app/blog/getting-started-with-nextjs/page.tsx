import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BlogPostPage() {
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
              Getting Started with Next.js
            </h1>
            <p className="text-muted-foreground">March 15, 2023</p>
          </div>

          <div className="markdown">
            <h2>Introduction to Next.js</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc
              nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc
              nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>
                <strong>Server-Side Rendering</strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                <strong>Static Site Generation</strong> - Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc.
              </li>
              <li>
                <strong>API Routes</strong> - Quis aliquam nisl nunc quis nisl.
              </li>
            </ul>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>

            <h3>Code Example</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <main>
        <h1>Welcome to Next.js!</h1>
      </main>
    </div>
  )
}`}</code>
            </pre>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit.
            </p>

            <blockquote>
              <p>
                Next.js gives you the best developer experience with all the features you need for production: hybrid
                static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config
                needed.
              </p>
            </blockquote>

            <h3>Getting Started</h3>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur.
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

