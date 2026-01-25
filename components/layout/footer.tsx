import { Dog, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "#service", label: "Services" },
    { href: "#package", label: "Packages" },
    { href: "#testimonial", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

const subLinks = [
    { href: "#groom", label: "Grooming" },
    { href: "#nail-cut", label: "Nail Cutting" },
    { href: "#pet-hotel", label: "Pet Hotel" },
    { href: "#bath", label: "Bathing" },
    { href: "#body-check", label: "Body Check" },
    { href: "#dental-care", label: "Dental Care" },
];

const social = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer(){
    return (
        <footer className="border-t border-border/40 bg-muted/30">
            <div className="container mx-auto px-4 py-12 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Logo */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow:md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3">
                                <Dog className="h-5 w-5"/>
                            </div>

                            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                PetCare
                            </span>
                        </Link>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                                Your furry friends deserve the best!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">
                            Quick Link
                        </h3>

                        <nav className="grid grid-cols-2">
                            <ul className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                    
                                ))}
                            </ul>

                            <ul className="space-y-2 text-sm">
                                {subLinks.map((sublink) => (
                                    <li key={sublink.href}>
                                        <Link
                                            href={sublink.href}
                                            className="text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            {sublink.label}
                                        </Link>
                                    </li>
                                    
                                ))}
                            </ul>

                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>
                                    123Pet Street, City
                                </span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                    <span>
                                        (123) 456-7890
                                    </span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>
                                    hello@petcare.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">
                            Follow Us
                        </h3>

                        <div className="flex gap-3">
                            {social.map(({icon: Icon, href, label}) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:-translate-y-0.5"
                                >   
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}