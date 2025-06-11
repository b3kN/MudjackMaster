import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  SimpleGrid, 
  Card, 
  CardBody, 
  Image,
  VStack,
  HStack,
  Icon,
  Badge,
  Flex
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { FaHome, FaBuilding, FaTools, FaShield, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const services = [
    {
      icon: FaHome,
      title: "Residential Mudjacking",
      description: "Lift sunken driveways, sidewalks, patios, and garage floors with precision and care.",
      features: ["Driveways & Walkways", "Patio & Pool Decks", "Garage Floors"]
    },
    {
      icon: FaBuilding,
      title: "Commercial Services", 
      description: "Professional concrete lifting for businesses, warehouses, and commercial properties.",
      features: ["Warehouse Floors", "Parking Lots", "Loading Docks"]
    },
    {
      icon: FaTools,
      title: "Foundation Repair",
      description: "Comprehensive foundation stabilization and repair services for lasting results.",
      features: ["Slab Jacking", "Void Filling", "Settlement Issues"]
    }
  ]

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
  ]

  return (
    <Box>
      <Navigation />
      
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-br, brand.500, brand.700)"
        color="white"
        py={20}
      >
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <VStack align="start" spacing={8}>
              <Heading as="h1" size="2xl" fontWeight="bold">
                Professional Mudjacking & Concrete Lifting Services
              </Heading>
              <Text fontSize="xl" color="blue.100">
                Fast, affordable, and permanent solutions for sunken concrete. Trusted by homeowners for over 15 years.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="orange"
                >
                  Get Free Estimate
                </Button>
                <Button
                  as="a"
                  href="tel:555-123-4567"
                  size="lg"
                  variant="outline"
                  colorScheme="white"
                  leftIcon={<PhoneIcon />}
                >
                  Call (555) 123-4567
                </Button>
              </HStack>
              <HStack spacing={6} fontSize="sm" flexWrap="wrap">
                <HStack>
                  <Icon as={FaShield} />
                  <Text>Fully Licensed & Insured</Text>
                </HStack>
                <HStack>
                  <Icon as={FaClock} />
                  <Text>Same Day Service</Text>
                </HStack>
              </HStack>
            </VStack>
            <Box>
              <Image 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional mudjacking equipment and team working on concrete" 
                borderRadius="xl"
                shadow="2xl"
                w="full"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* Services Overview */}
      <Box py={16} bg="white">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <VStack textAlign="center" spacing={4}>
              <Heading as="h2" size="xl">Our Professional Services</Heading>
              <Text fontSize="lg" color="gray.500" maxW="2xl">
                We specialize in concrete lifting and foundation repair using state-of-the-art mudjacking techniques.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {services.map((service, index) => (
                <Card key={index} shadow="lg" _hover={{ shadow: "xl" }} transition="all 0.2s">
                  <CardBody p={6}>
                    <VStack align="start" spacing={4}>
                      <Box
                        w={12}
                        h={12}
                        bg="brand.500"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={service.icon} color="white" boxSize={6} />
                      </Box>
                      <Heading as="h3" size="md">{service.title}</Heading>
                      <Text color="gray.500">{service.description}</Text>
                      <VStack align="start" spacing={1} fontSize="sm" color="gray.500">
                        {service.features.map((feature, idx) => (
                          <Text key={idx}>• {feature}</Text>
                        ))}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>

            {/* Before & After Gallery */}
            <VStack spacing={8} w="full">
              <Heading as="h3" size="lg" textAlign="center">Before & After Results</Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
                {beforeAfterImages.map((image, index) => (
                  <Card key={index} overflow="hidden">
                    <Image 
                      src={image.src}
                      alt={image.description}
                      w="full"
                      h={48}
                      objectFit="cover"
                    />
                    <CardBody p={4}>
                      <Heading 
                        as="h4" 
                        size="sm" 
                        color={image.type === 'before' ? 'red.600' : 'green.600'}
                        mb={2}
                      >
                        {image.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.500">{image.description}</Text>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>

            <Button
              as={Link}
              href="/contact"
              size="lg"
              variant="orange"
            >
              Get Your Free Estimate Today
            </Button>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}