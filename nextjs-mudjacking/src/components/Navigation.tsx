'use client'

import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Text,
  useDisclosure,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <Box bg="white" shadow="sm" position="sticky" top={0} zIndex={1000}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
        px={4}
      >
        <Text fontSize="xl" fontWeight="bold" color="brand.500">
          Solid Foundation
        </Text>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              as={NextLink}
              href={item.href}
              px={2}
              py={1}
              rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'gray.100',
              }}
            >
              {item.name}
            </Link>
          ))}
        </HStack>

        <HStack spacing={4}>
          <Button
            as="a"
            href="tel:555-123-4567"
            bg="orange.500"
            color="white"
            _hover={{ bg: 'orange.600' }}
            leftIcon={<PhoneIcon />}
            display={{ base: 'none', md: 'flex' }}
          >
            (555) 123-4567
          </Button>

          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  as={NextLink}
                  href={item.href}
                  onClick={onClose}
                  p={2}
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                as="a"
                href="tel:555-123-4567"
                bg="orange.500"
                color="white"
                _hover={{ bg: 'orange.600' }}
                leftIcon={<PhoneIcon />}
                mt={4}
              >
                Call (555) 123-4567
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}