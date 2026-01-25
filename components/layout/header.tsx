import { Button } from "@/components/ui/button";
import { Dog, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#service", label: "Services" },
  { href: "#package", label: "Packages" },
  { href: "#testimonial", label: "Testimonials" },
];

export function Header(){
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
            <div className="container flex mx-auto h-16 items-center justify-between px-4 lg:px-8">
                {/* Logo Brand */}
                <Link href="/" className="group flex items-center gap-2 font-bold text-xl transition-colors hover:text-primary">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow:md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3">
                        <Dog className="h-5 w-5"/>
                    </div>
                    <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent" >
                        PetCare
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            className="relative px-4 py-2 font-medium text-muted-foreground transition-colors hover:text-primary group"
                        >
                            {link.label}

                            <span className="absolute inset-x-2 -bottom-px h-0.5 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            <span/>
                        </Link>
                        
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-3">
                    <Button 
                        asChild
                        className="hidden sm:inline-flex gap-2 text-muted-foreground bg-transparent hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    >
                        <Link href="#contact">
                            <Phone className="h-4 w-4"/>
                            Contact
                        </Link>
                    </Button>

                    <Button 
                        asChild
                        className="bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-200 font-medium"
                    >
                        <Link href="#contact">
                            Book Appointment
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}