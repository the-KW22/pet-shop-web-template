import { Award, ClockCheck, Heart, ShieldCheck, Star, Trophy, Users, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const stats = [
  {
    icon: Heart,
    value: "1,200+",
    label: "Happy Pets Served",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Star,
    value: "200+",
    label: "5-Star Reviews",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    icon: ClockCheck,
    value: "24/7",
    label: "Care at Pet Hotel",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Users,
    value: "15+",
    label: "Expert Groomers",
    color: "bg-primary/10 text-primary",
  },
];

export default function Achievement() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-linear-to-b from-background via-muted/30 to-background">

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            <span>Our Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Pet Parents{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Years of dedication to pet care excellence, recognized by our community.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 lg:mb-16">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <ShieldCheck className="h-4 w-4 mr-2 text-primary" />
            Certified Groomers
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-accent/70 bg-accent/30 hover:bg-accent/20 transition-colors"
          >
            <Award className="h-4 w-4 mr-2 text-accent-foreground" />
            Top Rated 2025
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-secondary/70 bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Sparkles className="h-4 w-4 mr-2 text-secondary-foreground" />
            Premium Service
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div
                className={`flex h-14 w-14 mx-auto items-center justify-center rounded-2xl ${stat.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
