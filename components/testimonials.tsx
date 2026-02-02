import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageCircleHeart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Buddy",
    type: "Golden Retriever",
    image: "/portfolio/pet-shop-web-template/pets/dog1.jpg",
    rating: 5,
    comment:
      "Woof! The treats here are absolutely pawsome! My tail hasn't stopped wagging since my parent discovered this place. 10/10 would recommend to all my furry friends!",
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Persian Cat",
    image: "/portfolio/pet-shop-web-template/pets/cat1.jpg",
    rating: 5,
    comment:
      "Finally, a shop that understands my refined taste. The premium catnip selection is *chef's kiss*. My parent now knows exactly where to shop.",
  },
  {
    id: 3,
    name: "Max",
    type: "German Shepherd",
    image: "/portfolio/pet-shop-web-template/pets/dog2.jpg",
    rating: 4,
    comment:
      "Great toys that actually last! I've destroyed many toys in my time, but these ones are tough. The squeaky ball is my favorite. Would give 5 stars if they had more bacon treats!",
  },
  {
    id: 4,
    name: "Luna",
    type: "Siamese Cat",
    image: "/portfolio/pet-shop-web-template/pets/cat2.jpg",
    rating: 5,
    comment:
      "Meow! The cozy beds here are purrfect for my 16-hour nap schedule. Fast delivery too - my parent was impressed, and I got to claim the box immediately.",
  },
  {
    id: 5,
    name: "Charlie",
    type: "Beagle",
    image: "/portfolio/pet-shop-web-template/pets/dog3.jpg",
    rating: 5,
    comment:
      "FOOD! TOYS! TREATS! Everything a good boy could ever want! The staff even gave me extra belly rubs during pickup. Best day ever!",
  },
  {
    id: 6,
    name: "Mittens",
    type: "Maine Coon",
    image: "/portfolio/pet-shop-web-template/pets/cat3.jpg",
    rating: 4,
    comment:
      "The scratching post is magnificent and worthy of my majestic claws. My only complaint is that my parent keeps interrupting my 3 AM zoomies to admire it.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonial" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircleHeart className="h-4 w-4" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Furry{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Friends Say
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it — hear from our happy customers
            and their beloved pets!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                {/* Chat Bubble */}
                <div className="relative bg-muted rounded-2xl rounded-bl-none p-4 mb-6">
                  <p className="text-sm leading-relaxed">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                  {/* Bubble tail */}
                  <div className="absolute -bottom-2 left-0 w-4 h-4 bg-muted clip-triangle" />
                </div>

                {/* Avatar and Info */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.type}
                    </p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}