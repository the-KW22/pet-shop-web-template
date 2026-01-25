import { Bed, BriefcaseMedical, Hospital, Scissors, ScissorsLineDashed, ShowerHead, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    id: "groom",
    label: "Grooming",
    description: "Grooming service including fur trimming, styling, ear cleaning, and hygiene care to keep your pet neat and comfortable.",
    price: "RM80 - RM150",
    icon: Scissors,
    color: "bg-primary/10 text-primary",
    borderColor: "from-primary via-accent to-primary",
    popular: true,
  },
  {
    id: "nail-cut",
    label: "Nail Cutting",
    description: "Safe and gentle nail trimming to prevent overgrowth, discomfort, and scratching injuries.",
    price: "RM25 - RM40",
    icon: ScissorsLineDashed,
    color: "bg-accent/30 text-accent-foreground",
    borderColor: "from-accent via-primary to-accent",
    popular: false,
  },
  {
    id: "pet-hotel",
    label: "Pet Hotel",
    description: "A clean, secure, and comfortable boarding space where your pet is cared for with daily monitoring and attention.",
    price: "RM50 - RM90 / night",
    icon: Bed,
    color: "bg-secondary text-secondary-foreground",
    borderColor: "from-secondary via-primary to-secondary",
    popular: true,
  },
  {
    id: "bath",
    label: "Bathing",
    description: "Refreshing bath using pet-safe shampoo, including drying and basic brushing for a clean, fresh-smelling coat.",
    price: "RM40 - RM70",
    icon: ShowerHead,
    color: "bg-primary/10 text-primary",
    borderColor: "from-primary via-secondary to-primary",
    popular: false,
  },
  {
    id: "body-check",
    label: "Body Check",
    description: "Basic health screening covering skin, ears, eyes, coat condition, and overall physical well-being.",
    price: "RM30 - RM50",
    icon: Hospital,
    color: "bg-accent/30 text-accent-foreground",
    borderColor: "from-accent via-primary to-accent",
    popular: false,
  },
  {
    id: "dental-care",
    label: "Dental Care",
    description: "Gentle dental cleaning to reduce plaque buildup, improve oral hygiene, and keep your pet's breath fresh.",
    price: "RM60 - RM100",
    icon: BriefcaseMedical,
    color: "bg-secondary text-secondary-foreground",
    borderColor: "from-primary via-accent to-primary",
    popular: true,
  },
];

export default function Service() {
  return (
    <section id="service" className="relative py-8 lg:py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Pet Care{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Gentle grooming, health checks, and cozy stays — all delivered with love and professional care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ icon: Icon, id, label, description, price, color, borderColor, popular }) => (
            <div
              key={id}
              id={id}
              className="group relative"
            >
              {/* Animated Gradient Border */}
              <div className={`absolute -inset-px bg-linear-to-r ${borderColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-px`} />
              <div className={`absolute -inset-px bg-linear-to-r ${borderColor} rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

              {/* Popular Glow Effect */}
              {popular && (
                <div className="absolute -inset-1 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              )}

              {/* Card */}
              <div className="relative bg-card rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-border/50 group-hover:border-transparent">

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute -top-8 -left-8 w-16 h-16 bg-linear-to-br ${borderColor} rotate-90 opacity-10 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute -bottom-8 -right-8 w-16 h-16 bg-linear-to-tl ${borderColor} rotate-45 opacity-10 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Popular Badge */}
                {popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium shadow-lg shadow-primary/25">
                      <Sparkles className="h-3 w-3" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {label}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Decorative Line */}
                  <div className="relative pt-4 mb-4">
                    <div className="absolute top-0 left-0 right-0 h-px bg-border/50" />
                    <div className={`absolute top-0 left-0 h-px bg-linear-to-r ${borderColor} w-0 group-hover:w-full transition-all duration-500`} />
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                      <p className="text-lg font-bold text-primary">{price}</p>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="group/btn transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Link href="#contact" className="flex items-center gap-1.5">
                        Book Now
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which service your pet needs?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group relative overflow-hidden px-8 py-6 text-base font-semibold border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Contact Us for a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
