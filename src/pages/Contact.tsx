
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "We've received your message. Our team will get back to you soon.",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      destination: "",
      message: "",
    });
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="get in touch"
        description="Have questions or ready to book your next adventure? Reach out to our travel experts."
        image="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
        showCta={false}
      />

      <section className="py-16 container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Our travel experts are ready to help you plan your next adventure"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Send Us A Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleSelectChange(value, "subject")}>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Trip Booking</SelectItem>
                        <SelectItem value="custom">Custom Trip Planning</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination">Interested Destination</Label>
                  <Select value={formData.destination} onValueChange={(value) => handleSelectChange(value, "destination")}>
                    <SelectTrigger id="destination">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Not sure yet</SelectItem>
                      <SelectItem value="iceland">Iceland</SelectItem>
                      <SelectItem value="norway">Norway</SelectItem>
                      <SelectItem value="newzealand">New Zealand</SelectItem>
                      <SelectItem value="japan">Japan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your travel plans or questions"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="h-6 w-6 text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Main Office</h4>
                    <p className="text-slate-600 mt-1">
                      1234 Travel Street, Suite 100<br />
                      Adventure City, 98765
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-6 w-6 text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Phone</h4>
                    <p className="text-slate-600 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-6 w-6 text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Email</h4>
                    <p className="text-slate-600 mt-1">info@tripmap.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-6 w-6 text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Business Hours</h4>
                    <p className="text-slate-600 mt-1">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
              <p className="text-slate-300 mb-4">
                For urgent matters related to ongoing trips:
              </p>
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-gold mr-3" />
                <span>+1 (555) 987-6543</span>
              </div>
              <p className="text-sm text-slate-400">
                This line is monitored 24/7 for clients currently on a trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-lg overflow-hidden h-96">
            {/* Replace with an actual map component if needed */}
            <div className="w-full h-full bg-slate-300 flex items-center justify-center">
              <span className="text-slate-700">Interactive Map Would Go Here</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
