import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import heroBackground from "@assets/generated_images/professional_tech_hero_background.png";
import {
  MapPin,
  Mail,
  Phone,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Settings,
  Cpu,
  Calendar,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Building2,
  Target,
  Users,
  CheckCircle2,
  Network,
  Shield,
  Wrench,
  Languages,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Presale Manager Low Current Systems",
    company: "Eshraq Al-Jazeera Technology Co.",
    period: "Mar 2025 - Present",
    location: "Riyadh, Saudi Arabia",
    systems: [
      "ICT Infrastructure",
      "IP-CCTV",
      "Audio Visual",
      "Access Control",
      "Lighting Control",
      "Fire Alarm Systems",
      "Public Address",
      "Nurse Call",
      "PRMS",
      "GRMS",
      "BMS",
      "Parking Guidance"
    ],
    highlights: [
      "Lead design, pricing, and technical strategy for large-scale Infrastructure Networking projects",
      "Oversee preparation of detailed engineering drawings and technical specifications",
      "Direct and mentor a team of supervisors and technicians",
      "Provide technical support to Implementation Teams and Project Managers across all supervised systems",
      "Ensure 100% system uptime through expert troubleshooting protocols",
    ],
    fullDescription: [
      "End-to-End Project Leadership: Lead the design, pricing, and technical strategy for large-scale Infrastructure Networking and Light Current projects from initial concept to final delivery.",
      "System Design & Documentation: Oversee the preparation of detailed engineering drawings, technical specifications, and contract documents for advanced Communication and Security systems.",
      "Technical Problem Solving: Expertly diagnose system failures and breakdowns, developing high-level professional solutions and troubleshooting protocols to ensure 100% system uptime.",
      "Multidisciplinary Coordination: Act as the primary technical bridge between different engineering disciplines to ensure seamless integration and project alignment with client requirements.",
      "Implementation Support: Provide comprehensive technical support and guidance to Implementation Teams and Project Managers throughout all project phases, ensuring successful system deployment.",
      "Team Leadership: Direct and mentor a dedicated team of supervisors and technicians, ensuring high-quality installation, configuration, and adherence to project timelines.",
      "Quality Assurance: Monitor ongoing installations and maintenance schedules to provide proactive system monitoring and resolve potential issues before they impact project delivery.",
    ],
  },
  {
    id: 2,
    title: "Presale Engineer Low Current Systems",
    company: "Eshraq Al-Jazeera Technology Co.",
    period: "Mar 2024 - Present",
    location: "Riyadh, Saudi Arabia",
    highlights: [
      "Provide Solution, designing, pricing for Infrastructure Networking projects",
      "Prepare efficient designs of Communication and Security Systems",
      "Handle and lead a team of supervisors and technicians",
      "Coordinate between all disciplines for project success",
    ],
    fullDescription: [
      "Implements specific Communication and Security Systems in accordance with the work program of the project",
      "Prepares and assists with the efficient and effective design of Communication and Security Systems, prepares drawings, contract documents",
      "Responsible for the coordination between all disciplines",
      "Diagnosing Systems Failures, Breakdown Problems, and Plan Professional Solutions",
      "Handle and lead a team of supervisors and technicians",
      "Provide the proper implementation of the Low current Systems",
    ],
  },
  {
    id: 3,
    title: "Team Leader Technical and Pre-sale Engineer",
    company: "UNITED SMART BUILDING Co.",
    period: "Mar 2024 - Aug 2024",
    location: "Saudi Arabia",
    highlights: [
      "Led technical pre-sale team for Low Current System projects",
      "Designed and priced Infrastructure Networking solutions",
      "Managed end-to-end project implementation",
    ],
    fullDescription: [
      "To Provide Solution, designing, pricing and Installation, Troubleshooting, and Configuration of Infrastructure Networking and All Light Current System End to End Projects.",
      "Implements specific Communication and Security Systems in accordance with the work program",
      "Prepares and assists with the efficient and effective design of Communication and Security Systems",
    ],
  },
  {
    id: 4,
    title: "Pre-sale Engineer Low Current System",
    company: "UNITED SMART BUILDING Co.",
    period: "Jan 2024 - Mar 2024",
    location: "Saudi Arabia",
    highlights: [
      "Designed and priced Data, IP Telephone, UPS, CCTV, Access Control systems",
      "Created technical presentations and proposals",
      "Trained sales teams on technical aspects",
    ],
    fullDescription: [
      "Develop an in-depth understanding of the company's products and stay up-to-date with industry trends",
      "Engage with potential clients to assess their technical requirements",
      "Create and deliver compelling technical presentations and proposals",
      "Collaborate with the product development team to tailor solutions",
    ],
  },
  {
    id: 5,
    title: "SMT Maintenance and Innovation Engineer",
    company: "Samsung Electronics",
    period: "Dec 2021 - Dec 2023",
    location: "Egypt",
    highlights: [
      "Developed desktop applications using Python for machine management",
      "Developed Embedded Applications using C++ and Python",
      "Managed PM Activities (Electrical and Mechanical)",
      "Led QC circle and improvement plans",
    ],
    fullDescription: [
      "Develop desktop application using Python to serve machine and spare Part management",
      "Develop Embedded Applications using C++ And Python to test Machine Supply Parts After PM",
      "Mange PM Activities (Electrical and Mechanical)",
      "Support classifying cost reduction items and identify improvements",
      "Perform equipment calibration and provide consumable supplies",
      "Participate in QC (quality control) circle and proposal for improvement plans",
    ],
  },
  {
    id: 6,
    title: "SMT Factory Manager",
    company: "WARM LIGHT ELECTRONICS",
    period: "Oct 2021 - Dec 2021",
    location: "Egypt",
    highlights: [
      "Improved manufacturing processes using Quality and Designer data",
      "Built culture of continuous improvement",
      "Drove reductions in setup times and cycle times",
    ],
    fullDescription: [
      "Use data from Quality and Designer to improve manufacturing processes and tools",
      "Build a culture of stopping to fix problems, creating a continuous flow, and building in quality",
      "Meet internal customer board demand with exceptional timing and quality",
      "Drive reductions in setup times, cycle times, and process improvement",
      "Preparing production reports and submitting them to key decision-makers",
    ],
  },
  {
    id: 7,
    title: "SMT Production Engineer",
    company: "WARM LIGHT ELECTRONICS",
    period: "Apr 2021 - Oct 2021",
    location: "Egypt",
    highlights: [
      "Achieved 100% production targets while following Quality and safety standards",
      "Monitored waste rates and analyzed root causes",
      "Reviewed production reports and productivity analysis",
    ],
    fullDescription: [
      "Responsible for achieving 100% of the production plane allocated for each line while following predetermined Quality and safety standard",
      "Monitoring waste rates, production scrap analysing root causes and suggestion means to reduce waste",
      "Reviews and monitor Production reports and papers Productivity analysis accordingly",
    ],
  },
  {
    id: 8,
    title: "PCB Quality Engineer",
    company: "WARM LIGHT ELECTRONICS",
    period: "Aug 2020 - Apr 2021",
    location: "Egypt",
    highlights: [
      "Developed and tested electronics equipment manufacturing",
      "Troubleshot and isolated malfunctioning equipment",
      "Designed electronic circuits for testing equipment",
    ],
    fullDescription: [
      "Develop and test the manufacture of electronics equipment",
      "Test, troubleshoot, and isolate multifunction equipment",
      "Read schematics and make modification if needed",
      "Design electronic circuit to facilitate testing equipment",
      "Develop electronic principles and technology",
    ],
  },
];

const skills = {
  networking: {
    title: "Networking & Systems",
    icon: Network,
    items: [
      { name: "CCNA", level: "Certified" },
      { name: "Light Current Systems", level: "Expert" },
      { name: "Infrastructure Networking", level: "Expert" },
      { name: "IP-CCTV", level: "Expert" },
      { name: "Access Control", level: "Expert" },
      { name: "Fire Alarm Systems", level: "Advanced" },
      { name: "Public Address", level: "Advanced" },
      { name: "Building Management", level: "Advanced" },
    ],
  },
  programming: {
    title: "Programming",
    icon: Code,
    items: [
      { name: "Python", level: "Expert" },
      { name: "C/C++", level: "Advanced" },
      { name: "Embedded C", level: "Advanced" },
      { name: "Django", level: "Intermediate" },
      { name: "Tkinter", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      { name: "ORCAD (Cadence)", level: "Expert" },
      { name: "Proteus", level: "Expert" },
      { name: "Arduino", level: "Advanced" },
      { name: "Raspberry Pi", level: "Advanced" },
      { name: "Communication Protocols", level: "Advanced" },
    ],
  },
};

const projects = [
  {
    name: "Royal Commission School",
    type: "Education Sector",
    description: "Complete Low Current Systems implementation for educational facility",
    systems: ["CCTV", "Access Control", "PA System", "Networking"],
  },
  {
    name: "Education And Training Evaluation Commission",
    type: "Government",
    description: "Infrastructure networking and security systems for evaluation commission",
    systems: ["Infrastructure", "Security", "Communication"],
  },
  {
    name: "Tiba University",
    type: "Higher Education",
    description: "Comprehensive technology solutions for university campus",
    systems: ["ICT", "IP-CCTV", "Audio Visual", "Networking"],
  },
  {
    name: "Qiddia Water Supply Construction",
    type: "Industrial",
    description: "Water supply facility technology infrastructure",
    systems: ["SCADA", "Building Management", "Communication"],
  },
  {
    name: "Schools Ministry of Education",
    type: "Government Education",
    description: "Multiple school projects for Ministry of Education",
    systems: ["Low Current", "Security", "PA System"],
  },
];

function ExperienceCard({ experience, isExpanded, onToggle, isLast }: { 
  experience: typeof experiences[0]; 
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={`relative pl-8 ${isLast ? '' : 'pb-8'}`}>
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
      {!isLast && <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-border" />}
      
      <Card className="ml-4">
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <CardTitle className="text-lg font-semibold" data-testid={`text-job-title-${experience.id}`}>
                {experience.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {experience.period}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {experience.location}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {experience.systems && (
            <div className="mb-4 pb-4 border-b">
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Systems I Supervise</h4>
              <div className="flex flex-wrap gap-2">
                {experience.systems.map((system, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs py-1 px-2">
                    {system}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <ul className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          
          {isExpanded && (
            <div className="mt-4 pt-4 border-t">
              <h4 className="text-sm font-semibold mb-3">Full Responsibilities</h4>
              <ul className="space-y-2">
                {experience.fullDescription.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="mt-3 text-muted-foreground"
            data-testid={`button-expand-${experience.id}`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Show more
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function SkillCard({ category }: { category: typeof skills.networking }) {
  const Icon = category.icon;
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.items.map((skill, idx) => (
            <Badge
              key={idx}
              variant={skill.level === "Expert" ? "default" : skill.level === "Advanced" ? "secondary" : "outline"}
              className="font-mono text-xs"
              data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Card className="hover-elevate">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold" data-testid={`text-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
            {project.name}
          </CardTitle>
          <Badge variant="outline" className="text-xs flex-shrink-0">
            {project.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.systems.map((system, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs font-mono">
              {system}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExperience = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <span className="font-semibold text-lg">Mahmoud Saleh</span>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-experience">Experience</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-skills">Skills</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-projects">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="relative min-h-[80vh] flex items-center justify-center pt-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="flex items-center gap-1 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                    <Calendar className="h-3 w-3" />
                    Est. 2018
                  </Badge>
                  <Badge className="flex items-center gap-1 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                    <MapPin className="h-3 w-3" />
                    Riyadh, Saudi Arabia
                  </Badge>
                  <Badge className="flex items-center gap-1 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                    <Award className="h-3 w-3" />
                    CCNA Certified
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white" data-testid="text-hero-name">
                  Mahmoud Mohamed Saleh
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 font-medium" data-testid="text-hero-title">
                  Presale Manager - Low Current Systems
                </p>
                
                <p className="text-slate-400 text-lg max-w-lg">
                  Electrical Engineer specializing in telecommunications, security systems, and infrastructure networking across Saudi Arabia and the Middle East.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" data-testid="button-download-resume">
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm" asChild data-testid="button-contact-me">
                    <a href="#contact">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-3">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-white" data-testid="text-stat-years">7+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-3">
                    <Settings className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-white" data-testid="text-stat-projects">15+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-white" data-testid="text-stat-teams">5+</div>
                  <div className="text-sm text-slate-400">Teams Led</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Professional Summary</h2>
            </div>
            <Card className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-about-summary">
                Technical professional with 7+ years mastering the complete product lifecycle: from Electronics Design and Software Development, through SMT Manufacturing at Samsung Electronics, to Presales Engineering for Low Current System Solutions across the Middle East.
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  As Presale Manager, I Supervise Low Current System Solutions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ICT Infrastructure",
                    "IP-CCTV",
                    "Audio Visual",
                    "Access Control",
                    "Lighting Control",
                    "Fire Alarm Systems",
                    "Public Address",
                    "Nurse Call",
                    "PRMS",
                    "GRMS",
                    "BMS",
                    "Parking Guidance"
                  ].map((system) => (
                    <Badge key={system} variant="secondary" className="text-sm py-1.5 px-3">
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I bring a rare end-to-end perspective, understanding how products are designed, manufactured, and sold. This enables me to deliver tailored solutions that align technical excellence with business value, driving successful project outcomes and lasting client partnerships.
              </p>
            </Card>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Career Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            </div>
            <div className="relative">
              {experiences.map((exp, idx) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  isExpanded={expandedExperience === exp.id}
                  onToggle={() => toggleExperience(exp.id)}
                  isLast={idx === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <SkillCard category={skills.networking} />
              <SkillCard category={skills.programming} />
              <SkillCard category={skills.tools} />
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Key projects delivered as a Presale Engineer in Saudi Arabia
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Academic Background</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Education & Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" data-testid="text-education-degree">B.Sc. of Electrical Engineering</h3>
                    <p className="text-muted-foreground">Electronics and Communication Engineering Department (ECE)</p>
                    <p className="font-medium mt-2">Ain Shams University, Cairo, Egypt</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">2013 - 2018</Badge>
                      <Badge variant="outline">GPA: Very Good</Badge>
                    </div>
                    <div className="mt-4 p-3 bg-muted/50 rounded-md">
                      <p className="text-sm font-medium">Graduation Project</p>
                      <p className="text-sm text-muted-foreground">IOT wireless Monitoring and Actuation Platform of Aquaculture (electronics circuit and embedded system design)</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Certifications & Training</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">CCNA - Cisco Certified Network Associate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">Light Current System Diploma - Very Good</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">Data Engineering Essential Course</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">Embedded System Diploma - Amit Learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-primary" />
                        <span className="text-sm">Communication Protocols (UART, SPI, I2C)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="mt-6 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Languages</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Arabic</Badge>
                      <span className="text-sm text-muted-foreground">Mother Language</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">English</Badge>
                      <span className="text-sm text-muted-foreground">Very Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground mt-4">
                Let's work together on your next project
              </p>
            </div>
            <Card className="p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="mailto:mahmoud3374421@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover-elevate"
                  data-testid="link-email"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm">mahmoud3374421@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+966560706291"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover-elevate"
                  data-testid="link-phone"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-sm">0560706291</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/966570968665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover-elevate"
                  data-testid="link-whatsapp"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-sm">0570968665</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-muted/50 flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Al-Souweidi, Riyadh, Saudi Arabia</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" data-testid="button-send-message">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Mahmoud Mohamed Saleh - Electrical Engineer
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Riyadh, Saudi Arabia
          </p>
        </div>
      </footer>
    </div>
  );
}
