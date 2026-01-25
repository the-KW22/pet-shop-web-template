"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Send,
  User,
  Phone,
  Mail,
  PawPrint,
  Calendar,
  Clock,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const services = [
  { id: "grooming", label: "Grooming" },
  { id: "nail-cutting", label: "Nail Cutting" },
  { id: "pet-hotel", label: "Pet Hotel" },
  { id: "bathing", label: "Bathing" },
  { id: "body-check", label: "Body Check" },
  { id: "dental-care", label: "Dental Care" },
];

const packages = [
  { id: "basic-care", label: "Basic Care Package (RM79)" },
  { id: "complete-care", label: "Complete Care Package (RM189)" },
  { id: "premium-stay", label: "Premium Stay Package (RM259)" },
  { id: "custom", label: "Custom Package (Contact for pricing)" },
];

const petTypes = [
  { id: "dog", label: "Dog" },
  { id: "cat", label: "Cat" },
  { id: "other", label: "Other" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    petName: "",
    petType: "",
    serviceType: "",
    selectedService: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Booking Request Submitted!", {
      description:
        "Thank you for reaching out! Our team will contact you shortly via phone or email to confirm your appointment.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      ownerName: "",
      phone: "",
      email: "",
      petName: "",
      petType: "",
      serviceType: "",
      selectedService: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 overflow-hidden bg-linear-to-b from-background via-muted/20 to-background"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Book Appointment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Ready to pamper your furry friend? Fill out the form below and
            we&apos;ll get back to you as soon as possible!
          </p>
        </div>

        {/* Contact Form */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Owner Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <User className="h-5 w-5 text-primary" />
                  Owner Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="ownerName"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+60 12-345 6789"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pet Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <PawPrint className="h-5 w-5 text-primary" />
                  Pet Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="petName">Pet&apos;s Name *</Label>
                    <div className="relative">
                      <PawPrint className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        placeholder="Buddy"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petType">Pet Type *</Label>
                    <Select
                      value={formData.petType}
                      onValueChange={(value) =>
                        handleSelectChange("petType", value)
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        {petTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Service Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleSelectChange("serviceType", value)
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Individual Service or Package?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service">
                          Individual Service
                        </SelectItem>
                        <SelectItem value="package">Care Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="selectedService">
                      {formData.serviceType === "package"
                        ? "Select Package *"
                        : "Select Service *"}
                    </Label>
                    <Select
                      value={formData.selectedService}
                      onValueChange={(value) =>
                        handleSelectChange("selectedService", value)
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            formData.serviceType === "package"
                              ? "Choose a package"
                              : "Choose a service"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.serviceType === "package"
                          ? packages.map((pkg) => (
                              <SelectItem key={pkg.id} value={pkg.id}>
                                {pkg.label}
                              </SelectItem>
                            ))
                          : services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.label}
                              </SelectItem>
                            ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="preferredTime"
                        name="preferredTime"
                        type="time"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your pet's size, breed, behavior, any special needs or requests... (e.g., 'My dog is a medium-sized Golden Retriever, very friendly but nervous around loud noises. Please use gentle handling.')"
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto md:px-12 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Booking Request
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  We&apos;ll contact you within 24 hours to confirm your
                  appointment.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}