import Hero from "@/components/Hero";
import { SEOHead } from "@/components/ui/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home as HomeIcon, Building, Wrench, CheckCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Mudjacking",
      description: "Lift sunken driveways, sidewalks, patios, and garage floors with precision and care.",
      features: ["Driveways & Walkways", "Patio & Pool Decks", "Garage Floors"]
    },
    {
      icon: Building,
      title: "Commercial Services", 
      description: "Professional concrete lifting for businesses, warehouses, and commercial properties.",
      features: ["Warehouse Floors", "Parking Lots", "Loading Docks"]
    },
    {
      icon: Wrench,
      title: "Foundation Repair",
      description: "Comprehensive foundation stabilization and repair services for lasting results.",
      features: ["Slab Jacking", "Void Filling", "Settlement Issues"]
    }
  ];

  const beforeAfterImages = [
    {
      src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "BEFORE: Sunken Driveway",
      description: "Unsafe settlement causing trip hazards",
      type: "before"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "AFTER: Level & Safe", 
      description: "Professional mudjacking restoration",
      type: "after"
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "COMPLETED: Foundation Fixed",
      description: "Permanent solution with warranty",
      type: "after"
    }
  ];

  return (
    <>
      <SEOHead
        title="Solid Foundation Mudjacking - Professional Concrete Lifting Services"
        description="Professional mudjacking and concrete lifting services in your local area. Fast, affordable foundation repair with guaranteed results. Licensed & insured with 15+ years experience."
        keywords="mudjacking, concrete lifting, foundation repair, slab jacking, local contractor, concrete settlement, driveway repair"
      />
      
      <Hero />
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              We specialize in concrete lifting and foundation repair using state-of-the-art mudjacking techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-neutral-gray mb-4">{service.description}</p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Before & After Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Before & After Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {beforeAfterImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.description}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className={`font-semibold ${
                      image.type === 'before' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {image.title}
                    </h4>
                    <p className="text-sm text-neutral-gray">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600">
              <Link href="/contact">
                <a>Get Your Free Estimate Today</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
