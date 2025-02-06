import React from "react";
import Image from "next/image";
import Link from "next/link";
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <div className="contact-details">
            <p>
              Phone:{" "}
              <Link href="tel:01245408003" className="hover-underline">
                01245408003
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link href="mailto:xyz@gmail.com" className="hover-underline">
                info@bewelllocal.co.uk
              </Link>
            </p>
            <p>
              Address:{" "}
              <Link
                href="https://maps.google.com?q=7,9+Broomfield+Rd,+Chelmsford+CM1+1SY,+United+Kingdom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline"
              >
                7, 9 Broomfield Rd, Chelmsford CM1 1SY
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-section payments">
          <h4>We Accept</h4>
          <div className="payment-icons">
            <Image
              src="/visa.png"
              alt="Visa"
              width={80}
              height={50}
              className="payment-icon"
            />
            <Image
              src="/mastercard.png"
              alt="MasterCard"
              width={80}
              height={50}
              className="payment-icon"
            />
            <Image
              src="/ApplePay.png"
              alt="Apple Pay"
              width={80}
              height={50}
              className="payment-icon"
            />
          </div>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul className="quick-links-list">
            <li>
              <Link href="/" className="hover-underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover-underline">
                Location
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover-underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons flex justify-center md:justify-start">
            <Link
              href="https://www.instagram.com/bewelllocal"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src="/Instagram.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src="/Facebook.png"
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="pt-4 md:pt-0">&copy; {new Date().getFullYear()} BeWell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
