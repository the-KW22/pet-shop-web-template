import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, CalendarCheck, PawPrint, Sparkles } from "lucide-react";

export default function Hero(){
    return (
        <section id="hero" className="relative min-h-100vh overflow-hidden bg-background">
            <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-5 space-y-6 lg:space-y-8">
                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight tracking-tight animate-in fade-in slide-in-from-left-8 duration-700">
                            <span className="text-foreground">Your Furry Friend</span>
                            <br />
                            <span className="bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                                Deserve the Best!
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
                            Gentle grooming, comprehensive health checks, and cozy pet hotel
                            services —{" "}
                            <span className="text-primary font-medium">
                                tailored for your furry companions
                            </span>
                            .
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
                            <Button
                                asChild
                                size="lg"
                                className="group relative overflow-hidden px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-100"
                            >
                                <Link href="#contact" className="flex items-center gap-2">
                                    <CalendarCheck className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                                    Book Appointment
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="group px-8 py-6 text-base font-semibold border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 hover:scale-105"
                            >
                                <Link href="#service" className="flex items-center gap-2">
                                    <Sparkles className="h-5 w-5" />
                                    Our Services
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-7 relative animate-in fade-in zoom-in-95 slide-in-from-right-8 duration-1000 delay-200">
                        {/* Main image container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white/50 dark:border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/portfolio/pet-shop-web-template/vecteezy_close-up-portrait-of-tricolor-australian-shepherd-dog-lying_3018949.jpeg"
                                alt="Beautiful Australian Shepherd dog at PetCare grooming salon"
                                width={700}
                                height={560}
                                className="object-cover w-full h-auto"
                                priority
                            />
                                {/* Subtle linear overlay for depth */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                        </div>

                        {/* Floating Paw Print - Top Right */}
                        <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-10 animate-float">
                            <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-secondary flex items-center justify-center shadow-lg rotate-12">
                                <PawPrint className="h-8 w-8 lg:h-10 lg:w-10 text-secondary-foreground" />
                            </div>
                        </div>

                        {/* Floating Paw Print - Bottom Left */}
                        <div className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 z-10 animate-float delay-300">
                            <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-accent flex items-center justify-center shadow-lg -rotate-6">
                                <PawPrint className="h-8 w-8 lg:h-10 lg:w-10 text-accent-foreground fill-accent-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}