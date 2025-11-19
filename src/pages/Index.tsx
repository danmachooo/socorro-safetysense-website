import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Bell, Users, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import mdrrmoLogo from "@/assets/mdrrmo-logo.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Report incidents in seconds",
      description:
        "Quick and easy reporting for any emergency or concern in your community",
    },
    {
      icon: Bell,
      title: "Real-time notifications for responders",
      description:
        "Instant alerts ensure fast response times when every second counts",
    },
    {
      icon: Users,
      title: "Simple and user-friendly for all ages",
      description:
        "Designed to be accessible and easy to use for everyone in Socorro",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={mdrrmoLogo}
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
            </div>
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
                Official Socorro Municipality App
              </span>
            </div>

            <h1
              className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Download the Socorro Reporting & Responder App called{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Safetysense
              </span>
            </h1>

            <p
              className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              A simple all-in-one app for reporting emergencies and responding
              faster in the Municipality of Socorro.
            </p>

            <div
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="https://github.com/danmachooo/Safetysense-App-React-Native-v3/releases/download/v1.0.0/app-release.apk"
                download
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base font-medium shadow-lg transition-all hover:shadow-xl"
                >
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download for Android
                </Button>
              </a>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-medium border-border hover:bg-accent transition-all"
              >
                <Link to="/learn-more">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Description Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Stay safe and connected with the Socorro Reporting & Responder App
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Residents can easily submit reports, while responders receive
              real-time alerts to act quickly. Made for everyone in Socorro —
              easy to use, fast, and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Everything you need to stay safe
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-foreground/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-mesh opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

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

      {/* Download CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card className="relative overflow-hidden border border-border bg-card/50 p-12 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

              <div className="relative text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Download Now
                </h2>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  Get started with Safetysense today and help make Socorro a
                  safer community
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
                    Download for Android
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

export default Index;