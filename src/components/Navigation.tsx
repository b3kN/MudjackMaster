'use client'

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  Heading
} from '@chakra-ui/react'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <Box bg="white" px={4} shadow="sm" position="sticky" top={0} zIndex={50}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
        {/* Logo */}
        <NextLink href="/" passHref>
          <Box cursor="pointer">
            <Heading size="md" color="brand.500">Solid Foundation</Heading>
            <Text fontSize="xs" color="gray.500">Mudjacking Services</Text>
          </Box>
        </NextLink>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {navigation.map((item) => (
            <NextLink key={item.name} href={item.href} passHref>
              <Link
                px={3}
                py={2}
                fontWeight="medium"
                color={isActiveLink(item.href) ? "brand.500" : "gray.500"}
                _hover={{ color: "brand.500" }}
                transition="colors 0.2s"
              >
                {item.name}
              </Link>
            </NextLink>
          ))}
        </HStack>

        {/* Call Now Button - Desktop */}
        <Button
          as="a"
          href="tel:555-123-4567"
          variant="orange"
          leftIcon={<PhoneIcon />}
          display={{ base: 'none', md: 'flex' }}
        >
          Call Now: (555) 123-4567
        </Button>

        {/* Mobile menu button */}
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                {navigation.map((item) => (
                  <NextLink key={item.name} href={item.href} passHref>
                    <Link
                      px={3}
                      py={2}
                      fontWeight="medium"
                      color={isActiveLink(item.href) ? "brand.500" : "gray.500"}
                      _hover={{ color: "brand.500" }}
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  </NextLink>
                ))}
                <Button
                  as="a"
                  href="tel:555-123-4567"
                  variant="orange"
                  leftIcon={<PhoneIcon />}
                  mt={4}
                >
                  Call Now
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}