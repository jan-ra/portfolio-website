import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
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
                Back to Home
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {/* Introduction */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-lg">
                <Image
                  src="/jan.JPG?height=400&width=400&text=Jan+Ramdohr"
                  alt="Jan Ramdohr"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Jan Ramdohr
              </h1>
              <h2 className="text-xl text-muted-foreground mb-6">
                {/* Back to the original, professional title */}
                Software Engineer and Data Explainer
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {/* Updated Introduction - Friendly Professional */}
                <p>
                  Hello! I'm Jan, a Software Engineer based in Delft with a
                  strong interest in cloud technologies and data analysis. I
                  enjoy building robust software solutions and exploring how
                  data can provide valuable insights.
                </p>
                <p>
                  My background includes a mix of academic study and hands-on
                  professional experience, giving me skills in programming,
                  system architecture, and project collaboration. I thrive in
                  environments where I can contribute to technology-driven
                  projects.
                </p>
                <p>
                  Outside of work, I'm involved in organizing youth sailing
                  camps and enjoy the creativity of improv theater.
                </p>
              </div>
            </div>
          </div>

          {/* Location and Languages */}
          <Card className="mb-12">
            <CardHeader>
              {/* Standard Title */}
              <CardTitle>Location & Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Current Location</h3>
                    <p className="text-muted-foreground">Delft, Netherlands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Languages</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {/* Standard Badges */}
                      <Badge>German (Native)</Badge>
                      <Badge>English (Professional)</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              {/* Standard Title */}
              Work Experience
            </h2>

            <div className="space-y-8">
              {/* Updated workExperience array data below */}
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <span className="hidden md:inline text-muted-foreground">
                      •
                    </span>
                    <span className="text-muted-foreground">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{job.period}</span>
                    {job.location && (
                      <>
                        <span>•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </>
                    )}
                  </div>
                  {/* Display description points as a list if applicable */}
                  {Array.isArray(job.description) ? (
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-3">{job.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              {/* Standard Title */}
              Education
            </h2>

            <div className="space-y-8">
              {/* Updated education array data below */}
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="hidden md:inline text-muted-foreground">
                      •
                    </span>
                    <span className="text-muted-foreground">
                      {edu.institution}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                    {edu.location && (
                      <>
                        <span>•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </>
                    )}
                  </div>
                  {/* Display description points as a list if applicable */}
                  {Array.isArray(edu.description) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm text-muted-foreground">
              {/* Standard Footer */}© {new Date().getFullYear()} ramdohr.dev.
              All rights reserved.
            </p>
            <div className="flex gap-4">
              {/* Standard Links */}
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

// Updated work experience data - Professional but approachable tone
const workExperience = [
  {
    title: "Cloud Engineer",
    company: "TJIP BV.",
    period: "2024 - Present",
    location: "Delft, Netherlands",
    description: [
      // Clear, professional phrasing
      "Maintaining and upgrading the company's server infrastructure.",
      "Ensuring server infrastructure remains compliant with relevant standards.",
      "Improving DevOps processes and the overall developer experience.",
    ],
    skills: [
      "Azure",
      "Kubernetes",
      "DevOps",
      "GitOps",
      "Docker",
      "Infrastructure Management",
      "Compliance",
    ],
  },
  {
    title: "Student Software Developer",
    company: "University of Amsterdam",
    period: "Aug 2023 - Oct 2023",
    location: "Amsterdam, Netherlands",
    description:
      "Developed and deployed a comprehensive API for data management, aimed at enhancing scientific project integration.", // Professional phrasing
    skills: ["API Development", "Data Management", "Python"],
  },
  {
    title: "Junior Software Engineer",
    company: "Jungheinrich AG",
    period: "Apr 2021 - Aug 2022",
    location: "Hamburg, Germany",
    description: [
      // Professional phrasing
      "Engineered and implemented custom microservices in Azure to streamline SAP service integration.",
      "Conducted code reviews and coordinated with external developers to maintain high software quality standards.",
      "Facilitated DevOps processes for SAP interfaces, improving system reliability and deployment efficiency.",
    ],
    skills: [
      "Azure",
      "Microservices",
      "SAP Integration",
      "DevOps",
      "Code Review",
      "Java",
      "TypeScript",
    ],
  },
  {
    title: "Trainee (Bachelor Cooperation)",
    company: "Jungheinrich AG",
    period: "Aug 2017 - Mar 2021",
    location: "Hamburg, Germany",
    description: [
      // Professional phrasing, removed "spearheaded"
      "Configured and optimized SharePoint and SAP controlling processes, enhancing internal system efficiency.",
      "Developed microservice APIs for SAP, incorporating Azure cloud solutions to improve service delivery.",
    ],
    skills: [
      "SAP",
      "SharePoint",
      "Azure",
      "Microservices",
      "API Development",
      "Process Optimization",
    ],
  },
];

// Updated education data - Professional but approachable tone
const education = [
  {
    degree: "M. Sc. Information Studies",
    institution: "University of Amsterdam",
    period: "Sep 2022 - Aug 2023",
    location: "Amsterdam, Netherlands",
    description: [
      // Clear, descriptive phrasing
      "Led a project on real-time facial recognition in video streams.",
      "Developed environmental sensors for measuring human emotional responses, applying HCI principles.",
      "Conducted a satellite data analysis project related to agricultural moisture levels.",
    ],
  },
  {
    degree: "B. Sc. Computer Science and Business Administration",
    institution: "Nordakademie – University of Applied Sciences",
    period: "Aug 2017 - Mar 2021",
    location: "Hamburg, Germany",
    description: [
      // Clear, descriptive phrasing
      "Specialized in Business Process Design using BPMN to improve operational workflows.",
      "Completed a thesis focused on efficient API design between ERP systems and microservices.",
    ],
  },
];
