import { Check, Sparkles, Crown, Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const packages = [
  {
    id: "basic",
    name: "Basic Care",
    description: "Essential grooming for everyday freshness",
    price: "RM79",
    period: "per visit",
    popular: false,
    features: [
      "Bath + Shampoo + Conditioning",
      "Professional Blow Dry",
      "Nail Trimming",
      "Ear Cleaning",
    ],
  },
  {
    id: "complete",
    name: "Complete Care",
    description: "Full pampering experience for your pet",
    price: "RM189",
    period: "per visit",
    popular: true,
    features: [
      "Everything in Basic Care",
      "Grooming & Styling",
      "Full Body Health Check",
      "Dental Care & Cleaning",
      "Paw Pad Moisturizing",
      "Cologne & Finishing Touch",
    ],
  },
  {
    id: "premium",
    name: "Premium Stay",
    description: "Complete care with overnight luxury",
    price: "RM259",
    period: "per night",
    popular: false,
    features: [
      "Everything in Complete Care",
      "Comfortable Overnight Stay",
      "24/7 Professional Care",
      "Premium Food & Treats",
      "Playtime & Exercise",
      "Free Toys & Snacks Gift",
    ],
  },
];

export default function Package() {
  return (
    <section id="package" className="relative py-16 lg:py-24 overflow-hidden bg-linear-to-b from-background via-muted/20 to-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pet Care{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Packages
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Choose the perfect care plan designed to keep your pet happy, healthy, and comfortable.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative ${pkg.popular ? "md:-mt-4 md:mb-4 z-10" : ""}`}
            >
              {/* Popular Glow Effect */}
              {pkg.popular && (
                <>
                  <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="absolute -inset-px bg-linear-to-r from-primary via-accent to-primary rounded-3xl opacity-100" />
                </>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-card rounded-3xl overflow-hidden transition-all duration-300
                  ${pkg.popular
                    ? "shadow-2xl shadow-primary/20 border-0"
                    : "border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2"
                  }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-linear-to-r from-primary to-accent py-2 text-center">
                    <span className="inline-flex items-center gap-1.5 text-primary-foreground text-sm font-semibold">
                      <Crown className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-6 lg:p-8 ${pkg.popular ? "pt-14" : ""}`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className={`text-xl lg:text-2xl font-bold mb-1 ${pkg.popular ? "text-primary py-4" : "text-foreground"}`}>
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6 pb-6 border-b border-border/50">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl lg:text-5xl font-bold ${pkg.popular ? "text-primary" : "text-foreground"}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5
                          ${pkg.popular
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className={`w-full group/btn transition-all duration-300
                      ${pkg.popular
                        ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                        : "bg-card border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary hover:text-primary"
                      }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href="#contact" className="flex items-center justify-center gap-2">
                      {pkg.popular ? "Get Started" : "Choose Plan"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>

                  {/* Popular Guarantee */}
                  {pkg.popular && (
                    <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      Best value for complete pet care
                    </p>
                  )}
                </div>

                {/* Corner Decorations for Popular */}
                {pkg.popular && (
                  <>
                    <div className="absolute top-12 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-2">
            All packages include a satisfaction guarantee
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom package?{" "}
            <Link href="#contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>{" "}
            for personalized options.
          </p>
        </div>
      </div>
    </section>
  );
}
