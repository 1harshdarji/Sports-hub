import { Link } from "react-router-dom";
import { Dumbbell, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-xl font-bold">SportHub</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your premier destination for fitness excellence. Join our community and transform your life through sports and wellness.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Membership", "Facilities", "Events", "Coaches"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-all text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Personal Training", "Group Classes", "Swimming Pool", "Tennis Courts", "Gym Equipment"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-all text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-secondary" />
                123 Sports Avenue, City
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-secondary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-secondary" />
                info@sporthub.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 SportHub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
