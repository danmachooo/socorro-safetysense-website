import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Bell,
  Users,
  MapPin,
  Clock,
  AlertCircle,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import mdrrmoLogo from "@/assets/mdrrmo-logo.jpg";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";
import step4 from "@/assets/step4.jpg";
import step5 from "@/assets/step5.jpg";
import step6 from "@/assets/step6.jpg";
import step7 from "@/assets/step7.jpg";
import step8 from "@/assets/step8.jpg";
import step9 from "@/assets/step9.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";
import s6 from "@/assets/s6.jpg";
import s7 from "@/assets/s7.jpg";
import downloadapp from "@/assets/downloadapp.png";
import turnonlocation from "@/assets/turnonlocation.jpg";
import allowfromsource from "@/assets/allowfromsource.jpg";
import installed from "@/assets/installed.jpg";
import install from "@/assets/install.jpg";
import homeapp from "@/assets/home.jpg";
const LearnMore = () => {
  const features = [
    {
      icon: Shield,
      title: "Report Incidents Quickly",
      description:
        "Submit emergency reports in seconds with our intuitive interface. Include location, photos, and detailed descriptions.",
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description:
        "Responders receive instant alerts with critical information to respond faster and more effectively.",
    },
    {
      icon: Users,
      title: "Community Safety",
      description:
        "Connect residents with emergency responders for a safer Socorro municipality.",
    },
    {
      icon: MapPin,
      title: "Location-based Alerts",
      description:
        "Automatic location tagging helps responders find you quickly during emergencies.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Report emergencies anytime, day or night. Our system is always ready to help.",
    },
    {
      icon: AlertCircle,
      title: "Multiple Emergency Types",
      description:
        "Report fires, medical emergencies, crimes, floods, accidents, and other incidents all in one app.",
    },
  ];

  // Getting Started Steps
  const steps = [
    {
      title: "Download the App",
      description:
        "Get Safetysense from the link on our homepage. Works only Android devices.",
      image:
        downloadapp ||
        "https://placehold.co/250x500/e2e8f0/1e293b?text=App+Download+Screen",
    },
    {
      title: "Turn on location",
      description:
        "Turn on your location to set your current location everytime you use the app.",
      image:
        turnonlocation ||
        "https://placehold.co/250x500/e2e8f0/1e293b?text=Sign+Up+Screen",
    },
    {
      title: "Turn on or allow installation from source ",
      description:
        "Some devices require turning on this settings so if you are asked with this during installation, just turn on the 'allow from source'",
      image:
        allowfromsource ||
        "https://placehold.co/250x500/e2e8f0/1e293b?text=Profile+Setup",
    },
    {
      title: "Install the app ",
      description:
        "After downloading the app, install the app from your file manager or file explorer.",
      image:
        install ||
        "https://placehold.co/250x500/e2e8f0/1e293b?text=Reporting+Dashboard",
    },
    {
      title: "App installed",
      description: "Wait for a few seconds to install the app.",
      image:
        installed ||
        "https://placehold.co/250x500/e2e8f0/1e293b?text=Reporting+Dashboard",
    },
    {
      title: "Open the app",
      description:
        "And that is it! You can now report incident if you are a citizen and manage incidents if you are a responder.",
      image:
        homeapp ||
        "https://placehold.co/250x500/e2e8f0/1e293b?text=Reporting+Dashboard",
    },
  ];

  // Updated Residents Guide with Images
  const residentsGuide = [
    {
      text: "Open the app and tap 'Report an Incident'",
      image:
        step1 || "https://placehold.co/300x600/e2e8f0/1e293b?text=Home+Screen",
    },
    {
      text: "Optional: Enter your name and contact information",
      image:
        step2 ||
        "https://placehold.co/300x600/e2e8f0/1e293b?text=Select+Incident",
    },
    {
      text: "Select the type of incident that happened in your area",
      image:
        step3 || "https://placehold.co/300x600/e2e8f0/1e293b?text=Location+Map",
    },
    {
      text: "Add photos to provide evidence of the incident",
      image:
        step4 || "https://placehold.co/300x600/e2e8f0/1e293b?text=Camera+View",
    },
    {
      text: "Provide detailed description of the incident",
      image:
        step5 ||
        "https://placehold.co/300x600/e2e8f0/1e293b?text=Description+Input",
    },
    {
      text: "Make sure to turn on your location in order for the responder to pinpoint your location.",
      image:
        step6 ||
        "https://placehold.co/300x600/e2e8f0/1e293b?text=Description+Input",
    },
    {
      text: "Click submit",
      image:
        step8 ||
        "https://placehold.co/300x600/e2e8f0/1e293b?text=Success+Message",
    },
    {
      text: "Confirm your report! Avoid reporting false incidents.",
      image:
        step7 ||
        "https://placehold.co/300x600/e2e8f0/1e293b?text=Success+Message",
    },
    {
      text: "Submit - responders are notified immediately",
      image:
        step9 ||
        "https://placehold.co/300x600/e2e8f0/1e293b?text=Success+Message",
    },
  ];

  // Updated Responders Guide with Images
  const respondersGuide = [
    {
      text: "Open the app and tap 'Login as Responder'",
      image:
        s1 || "https://placehold.co/300x600/1e293b/ffffff?text=Responder+Login",
    },
    {
      text: "Enter your credentials that is given to you by the admin",
      image:
        s2 || "https://placehold.co/300x600/1e293b/ffffff?text=Map+Overview",
    },
    {
      text: "Tap on incidents to see full details and photos",
      image:
        s3 ||
        "https://placehold.co/300x600/1e293b/ffffff?text=Incident+Details",
    },
    {
      text: "Accept or dismiss incident",
      image:
        s5 || "https://placehold.co/300x600/1e293b/ffffff?text=Status+Update",
    },
    {
      text: "You will see all the active incidents in the Reports Tab",
      image:
        s6 ||
        "https://placehold.co/300x600/1e293b/ffffff?text=Chat+Coordination",
    },
    {
      text: "If you resolved the incident, you can tap the incident in the Report and update it to resolved",
      image:
        s7 ||
        "https://placehold.co/300x600/1e293b/ffffff?text=Resolve+Incident",
    },
  ];

  const faqItems = [
    {
      question: "Is my personal information safe?",
      answer:
        "Yes. We use industry-standard encryption and secure servers to protect all your data. Only authorized responders can access incident reports.",
    },
    {
      question: "Can I report anonymously?",
      answer:
        "While we encourage providing your contact info for follow-up, you can submit reports with minimal personal information if needed.",
    },
    {
      question: "How fast do responders receive alerts?",
      answer:
        "Reports are delivered to responders instantly - usually within seconds of submission.",
    },
    {
      question: "What if I accidentally submit a report?",
      answer:
        "Accidental reports are rare thanks to a confirmation step before submission. Additionally, responders review every report and can dismiss any false alarms or incidents.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Internet is required to submit reports, as communication with responders relies entirely on the cloud or the internet.",
    },
    {
      question: "Is there customer support?",
      answer: "Yes. Contact the Socorro MDRRMO office during business hours.",
    },
  ];

  const developers = [
    {
      name: "John Paul Angelo C. Mayordo",
      role: "Lead Full Stack Developer",
      bio: "Designing and implementing secure infrastructures and real-time emergency response systems.",
      avatar: "https://placehold.co/400x400/1e293b/ffffff?text=Dev+1",
    },
    {
      name: "Thiena B. Damasco",
      role: "UI/UX Designer",
      bio: "Creating intuitive and user-friendly interfaces for both residents and emergency responders.",
      avatar: "https://placehold.co/400x400/1e293b/ffffff?text=Dev+2",
    },
    {
      name: "Aheizer B. Rodriguez",
      role: "Technical Writer",
      bio: "Documenting processes and best practices to ensure reliability, clarity, and data privacy.",
      avatar: "https://placehold.co/400x400/1e293b/ffffff?text=Dev+3",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={mdrrmoLogo || "/placeholder.svg"}
                alt="MDRRMO Socorro Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <h2 className="text-sm font-semibold text-foreground">
                  MDRRMO Socorro
                </h2>
                <p className="text-xs text-muted-foreground">
                  Disaster Risk Management
                </p>
              </div>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh pt-16">
        <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />

        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground"></span>
              </span>
              <span className="text-muted-foreground">
                Complete Guide to Safetysense
              </span>
            </div>

            <h1
              className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Learn Everything About{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Safetysense
              </span>
            </h1>

            <p
              className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Discover how to use our app to keep Socorro safe and respond
              faster to emergencies.
            </p>

            <div
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base font-medium shadow-lg transition-all hover:shadow-xl"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* About Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">About</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              What is Safetysense?
            </h2>
            <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
              Safetysense is the official Socorro Reporting & Responder App
              designed to bridge the gap between residents and emergency
              responders. It's a simple, fast, and reliable platform that
              enables the community to report emergencies quickly and helps
              responders act even faster.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a resident reporting an incident or a responder
              coordinating emergency response, Safetysense makes it easy to
              manage incidents and respond to it quickly and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="relative py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">Getting Started</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              How to Get Started in 6 Steps
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-foreground/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-mesh opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/10 bg-background text-xl font-bold text-foreground shadow-sm">
                    {index + 1}
                  </div>

                  <h3 className="mb-2 text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mb-8 text-muted-foreground leading-relaxed max-w-sm">
                    {step.description}
                  </p>

                  <div className="relative aspect-[1/2] w-48 overflow-hidden rounded-[2rem] border-8 border-foreground/10 bg-background shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <div className="absolute top-0 left-1/2 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-foreground/10 z-10"></div>
                    <img
                      src={step.image}
                      alt={`${step.title} screenshot`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Powerful Features for Safety
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-foreground/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-mesh opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background transition-all duration-300 group-hover:border-foreground/20 group-hover:shadow-md">
                    <feature.icon className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide Section - UPDATED WITH STEP-BY-STEP SCREENSHOTS */}
      <section className="relative py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">How To Use</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Usage Guide by Role
            </h2>
          </div>

          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
            {/* Residents Guide */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3">
                <Users className="h-6 w-6" />
                For Residents
              </h3>

              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {residentsGuide.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col gap-6 md:gap-8 group"
                  >
                    <div className="flex items-start gap-4 md:items-center">
                      <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm ring-4 ring-background transition-colors group-hover:border-foreground group-hover:text-foreground">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1 md:pt-0">
                        <p className="text-lg font-medium text-foreground">
                          {step.text}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-md aspect-[3/4]">
                      <img
                        src={step.image}
                        alt={`Step ${index + 1} illustration`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responders Guide */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3">
                <Shield className="h-6 w-6" />
                For Responders
              </h3>

              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {respondersGuide.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col gap-6 md:gap-8 group"
                  >
                    <div className="flex items-start gap-4 md:items-center">
                      <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm ring-4 ring-background transition-colors group-hover:border-foreground group-hover:text-foreground">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1 md:pt-0">
                        <p className="text-lg font-medium text-foreground">
                          {step.text}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-md aspect-[3/4]">
                      <img
                        src={step.image}
                        alt={`Step ${index + 1} illustration`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-foreground/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-foreground text-lg">
                      {item.question}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="relative py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">The Team</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Meet the Developers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The dedicated team of three behind the design, development, and
              deployment of Safetysense for Socorro.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {developers.map((dev, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-xl ring-1 ring-border">
                    <img
                      src={dev.avatar}
                      alt={dev.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-foreground">
                    {dev.name}
                  </h3>
                  <span className="mb-4 inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80">
                    {dev.role}
                  </span>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    {dev.bio}
                  </p>

                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">Why Choose Us</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Safetysense?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Shield className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Secure & Reliable
                  </h4>
                  <p className="text-muted-foreground">
                    Enterprise-grade security protects your information while
                    ensuring responders get critical data instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Community-Focused
                  </h4>
                  <p className="text-muted-foreground">
                    Built specifically for Socorro, designed by MinSU Calapan
                    BSIT Students who understand community needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Always Available
                  </h4>
                  <p className="text-muted-foreground">
                    24/7 emergency reporting and response coordination whenever
                    you need help.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Easy to Use
                  </h4>
                  <p className="text-muted-foreground">
                    Intuitive interface designed for everyone, regardless of age
                    or technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card className="relative overflow-hidden border border-border bg-card/50 p-12 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

              <div className="relative text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Ready to Help Keep Socorro Safe?
                </h2>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  Download Safetysense today and join the community response
                  effort.
                </p>

                <a
                  href="https://github.com/danmachooo/Safetysense-App-React-Native-v3/releases/download/v1.0.0/app-release.apk"
                  download
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base font-medium shadow-lg transition-all hover:shadow-xl"
                  >
                    <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Download now
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Municipality of Socorro • Keeping our community safe together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
