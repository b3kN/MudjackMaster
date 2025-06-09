import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Solid Foundation</h3>
            <p className="text-gray-400 mb-4">
              Professional mudjacking and concrete lifting services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Residential Mudjacking</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Commercial Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Foundation Repair</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Free Estimates</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <i className="fas fa-phone mr-2"></i>
                <a href="tel:555-123-4567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:info@solidfoundation.com" className="hover:text-white transition-colors">
                  info@solidfoundation.com
                </a>
              </p>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Main Street, Your City
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Solid Foundation Mudjacking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
