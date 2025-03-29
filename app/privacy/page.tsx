import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full py-4 px-4 md:px-6 border-b">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            ramdohr.dev
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Privacy Policy</h1>

          <h2>1. Introduction</h2>
          <p>
            Welcome to ramdohr.dev. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website. Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the site.
          </p>

          <h2>2. Collection of Your Information</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the website
            includes:
          </p>

          <h3>2.1 Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, and telephone number, that you
            voluntarily give to us when you choose to participate in various activities related to the website, such as
            online chat, contact forms, and newsletter subscriptions.
          </p>

          <h3>2.2 Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the website, such as your IP address, browser
            type, operating system, access times, and the pages you have viewed directly before and after accessing the
            website.
          </p>

          <h2>3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
            experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
            <li>Increase the efficiency and operation of the website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
            <li>Notify you of updates to the website.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <h3>4.1 By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>

          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            Email: privacy@ramdohr.dev
            <br />
            Phone: +49 123 456 7890
            <br />
            Address: 123 Tech Street, 10115 Berlin, Germany
          </p>
        </div>
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

