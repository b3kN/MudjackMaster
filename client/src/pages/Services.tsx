import { SEOHead } from "@/components/ui/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Building, Wrench, CheckCircle, Phone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Mudjacking",
      description: "Professional concrete lifting for homeowners dealing with sunken or settled concrete surfaces.",
      features: [
        "Driveway leveling and repair",
        "Sidewalk and walkway lifting", 
        "Patio and pool deck restoration",
        "Garage floor settlement correction",
        "Front step and porch repair"
      ],
      benefits: [
        "Cost-effective alternative to replacement",
        "Completed in hours, not days",
        "Minimal disruption to your property",
        "Environmentally friendly process"
      ]
    },
    {
      icon: Building,
      title: "Commercial Concrete Lifting",
      description: "Comprehensive concrete repair solutions for businesses and commercial properties.",
      features: [
        "Warehouse floor leveling",
        "Parking lot repair and maintenance",
        "Loading dock restoration", 
        "Retail storefront concrete work",
        "Industrial facility repairs"
      ],
      benefits: [
        "Minimal business downtime",
        "Professional, efficient service",
        "Long-lasting results",
        "Compliance with safety standards"
      ]
    },
    {
      icon: Wrench,
      title: "Foundation Repair",
      description: "Expert foundation stabilization and concrete settlement solutions.",
      features: [
        "Slab jacking and leveling",
        "Void filling under concrete",
        "Settlement issue correction",
        "Foundation crack repair preparation",
        "Preventive foundation maintenance"
      ],
      benefits: [
        "Prevents further structural damage",
        "Increases property value",
        "5-year warranty included",
        "Expert assessment and diagnosis"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Assessment",
      description: "We inspect your concrete and provide a detailed evaluation of the settlement issues."
    },
    {
      step: "2", 
      title: "Custom Solution",
      description: "Our experts design a repair plan tailored to your specific needs and budget."
    },
    {
      step: "3",
      title: "Professional Repair",
      description: "We use state-of-the-art equipment to lift and level your concrete quickly and efficiently."
    },
    {
      step: "4",
      title: "Quality Guarantee",
      description: "Every job comes with our 5-year warranty and satisfaction guarantee."
    }
  ];

  return (
    <>
      <SEOHead
        title="Mudjacking Services - Concrete Lifting & Foundation Repair | Solid Foundation"
        description="Professional mudjacking and concrete lifting services including residential, commercial, and foundation repair. Fast, affordable, and guaranteed results."
        keywords="mudjacking services, concrete lifting, foundation repair, slab jacking, driveway repair, commercial concrete lifting"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mudjacking Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive concrete lifting and foundation repair solutions for residential and commercial properties. 
              Fast, affordable, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600">
                <Link href="/contact">
                  <a>Get Free Estimate</a>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="tel:555-123-4567">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-gray mb-6">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Services Include:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1581094271901-8022df4466f9' : 
                        index === 1 ? '1504307651254-35680f356dfd' : 
                        '1541888946425-d81bb19240f5'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                      alt={`${service.title} professional work in progress`}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              We follow a proven 4-step process to ensure the best results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-neutral-gray text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Concrete Problems?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation estimate for your mudjacking project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-orange-600">
              <Link href="/contact">
                <a>Get Free Estimate</a>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="tel:555-123-4567">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
