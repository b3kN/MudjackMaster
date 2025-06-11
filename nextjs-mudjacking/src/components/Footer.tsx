'use client'

import React from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Divider,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import NextLink from 'next/link'

export default function Footer() {
  return (
    <Box bg="gray.800" color="white" py={12}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Company Info */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Solid Foundation Mudjacking
            </Text>
            <Text color="gray.300" fontSize="sm">
              Professional concrete lifting and foundation repair services. Licensed, insured, and trusted for over 15 years.
            </Text>
          </VStack>

          {/* Services */}
          <VStack align="start" spacing={4}>
            <Text fontSize="md" fontWeight="semibold">
              Services
            </Text>
            <VStack align="start" spacing={2} fontSize="sm" color="gray.300">
              <Link as={NextLink} href="/services" _hover={{ color: 'white' }}>
                Residential Mudjacking
              </Link>
              <Link as={NextLink} href="/services" _hover={{ color: 'white' }}>
                Commercial Concrete Lifting
              </Link>
              <Link as={NextLink} href="/services" _hover={{ color: 'white' }}>
                Foundation Repair
              </Link>
              <Link as={NextLink} href="/services" _hover={{ color: 'white' }}>
                Driveway Leveling
              </Link>
            </VStack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={4}>
            <Text fontSize="md" fontWeight="semibold">
              Contact
            </Text>
            <VStack align="start" spacing={3} fontSize="sm" color="gray.300">
              <HStack>
                <Icon as={FaPhone} />
                <Link href="tel:555-123-4567" _hover={{ color: 'white' }}>
                  (555) 123-4567
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Link href="mailto:info@solidfoundation.com" _hover={{ color: 'white' }}>
                  info@solidfoundation.com
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>123 Main Street, Your City, State 12345</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Hours */}
          <VStack align="start" spacing={4}>
            <Text fontSize="md" fontWeight="semibold">
              Business Hours
            </Text>
            <VStack align="start" spacing={2} fontSize="sm" color="gray.300">
              <HStack>
                <Icon as={FaClock} />
                <VStack align="start" spacing={1}>
                  <Text>Monday - Friday: 8:00 AM - 6:00 PM</Text>
                  <Text>Saturday: 8:00 AM - 4:00 PM</Text>
                  <Text>Sunday: Emergency Only</Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.600" />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} alignItems="center">
          <Text fontSize="sm" color="gray.400">
            © 2024 Solid Foundation Mudjacking. All rights reserved.
          </Text>
          <HStack spacing={6} justify={{ base: 'start', md: 'end' }} fontSize="sm">
            <Link as={NextLink} href="/privacy" color="gray.400" _hover={{ color: 'white' }}>
              Privacy Policy
            </Link>
            <Link as={NextLink} href="/terms" color="gray.400" _hover={{ color: 'white' }}>
              Terms of Service
            </Link>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}