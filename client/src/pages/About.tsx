import { SEOHead } from "@/components/ui/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully bonded with comprehensive liability coverage"
    },
    {
      icon: Award,
      title: "5-Year Warranty", 
      description: "Guaranteed workmanship on all services"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Emergency repairs available 24/7"
    },
    {
      icon: CheckCircle,
      title: "Free Estimates",
      description: "No obligation quotes within 24 hours"
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us - Solid Foundation Mudjacking | 15+ Years Experience"
        description="Learn about Solid Foundation Mudjacking's 15+ years of experience in concrete lifting and foundation repair. Licensed, insured, and trusted by thousands of customers."
        keywords="about mudjacking company, foundation repair experience, licensed concrete contractor, local mudjacking business"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">About Solid Foundation Mudjacking</h1>
              <p className="text-lg text-neutral-gray mb-6">
                With over 15 years of experience in concrete lifting and foundation repair, we've helped thousands of homeowners and businesses solve their concrete settlement issues quickly and affordably.
              </p>
              <p className="text-neutral-gray mb-8">
                Our team of certified professionals uses the latest mudjacking technology and environmentally-friendly materials to provide permanent solutions that save you up to 80% compared to concrete replacement.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-3 mt-1">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-neutral-gray">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-orange hover:bg-orange-600">
                  <Link href="/contact">
                    <a>Get Free Estimate</a>
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:555-123-4567">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (555) 123-4567
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional construction team inspecting concrete foundation work"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              We're committed to providing the highest quality mudjacking services with unmatched customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">15+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                <p className="text-neutral-gray">Over a decade and a half serving our local community with expert concrete lifting services.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1000+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
                <p className="text-neutral-gray">Thousands of satisfied homeowners and businesses trust us with their concrete repair needs.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">24/7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
                <p className="text-neutral-gray">Available around the clock for urgent foundation and concrete lifting emergencies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
