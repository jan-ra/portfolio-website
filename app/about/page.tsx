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
                Cloud Engineer & Full Stack Developer
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Hello! I'm Jan, a passionate developer with over 8 years of
                  experience in creating web and mobile applications. I
                  specialize in building solutions for the maritime industry,
                  combining my technical expertise with domain knowledge to
                  create tools that solve real-world problems.
                </p>
                <p>
                  My journey in tech began with a fascination for how software
                  can transform traditional industries. This led me to focus on
                  creating applications that bridge the gap between complex
                  maritime operations and modern technology.
                </p>
                <p>
                  When I'm not coding, you can find me sailing, exploring new
                  technologies, or contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>

          {/* Location and Languages */}
          <Card className="mb-12">
            <CardHeader>
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
                      <Badge>German (Native)</Badge>
                      <Badge>English (Fluent)</Badge>
                      <Badge>Dutch (Getting there)</Badge>
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
              Work Experience
            </h2>

            <div className="space-y-8">
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
                  <p className="mb-3">{job.description}</p>
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
              Education
            </h2>

            <div className="space-y-8">
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
                  <p>{edu.description}</p>
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

// Sample work experience data
const workExperience = [
  {
    title: "Cloud Engineer",
    company: "TJIP BV.",
    period: "2024 - Present",
    location: "Delft, Netherlands",
    description:
      "Leading the development of Ship Companion and other maritime technology solutions. Managing a team of 5 developers and coordinating with stakeholders to deliver high-quality software products.",
    skills: ["Azure", "Kubernernetes", "DevOps", "GitOps", "Docker"],
  },
  {
    title: "Research Assistant",
    company: "University of Amsterdam",
    period: "2023",
    location: "Amsterdam, Netherlands",
    description:
      "Developed and maintained web applications for logistics and shipping companies. Implemented real-time tracking systems and optimized database performance for large-scale applications.",
    skills: ["C", "Node.js", "SQL", "OpenAPI", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Jungheinrich AG",
    period: "2021 - 2023",
    location: "Hamburg, Germany",
    description:
      "Built responsive web applications and mobile apps for various clients in the transportation sector. Focused on front-end development and user experience design.",
    skills: ["Azure", "Node.js", "React Native", "Nest.js", "UI/UX Design"],
  },
  {
    title: "Dual Student",
    company: "Jungheinrich AG",
    period: "2017 - 2021",
    location: "Hamburg, Germany",
    description:
      "Built responsive web applications and mobile apps for various clients in the transportation sector. Focused on front-end development and user experience design.",
    skills: ["Azure", "SAP", "ABAP", "Java", "Project Management"],
  },
];

// Sample education data
const education = [
  {
    degree: "Master of Science in Information Studies (System Design)",
    institution: "University of Amsterdam",
    period: "2022-2023",
    location: "Amsterdam, Netherlands",
    description:
      "Specialized in Software Engineering and Distributed Systems. Thesis on 'Optimizing Real-time Data Processing for Maritime Logistics'.",
  },
  {
    degree:
      "Bachelor of Science in Computer Science and Business Administration",
    institution: "Nordakademie University of Applied Sciences",
    period: "2017 - 2021",
    location: "Hamburg, Germany",
    description:
      "Focused on web development and database management. Graduated with honors.",
  },
];
