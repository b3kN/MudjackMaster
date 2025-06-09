import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mudjacking & Concrete Lifting Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Fast, affordable, and permanent solutions for sunken concrete. Trusted by homeowners for over 15 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
                <Link href="/contact">
                  <a>Get Free Estimate</a>
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <a href="tel:555-123-4567">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional mudjacking equipment and team working on concrete" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
