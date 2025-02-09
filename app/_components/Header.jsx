"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import GlobalApi from "../_utils/GlobalApi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fetch categories on mount.
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await GlobalApi.getCategory();
        setCategories(response.data.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Set up scroll listener to toggle isScrolled state.
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Top Announcement Bar */}
      {!isScrolled && (
        <div className="fixed top-0 z-50 w-full bg-[#F8EAD8] text-center py-1.5 text-sm">
          Get 20% off £50+ with code 'HNY20'. T&Cs apply.
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed ${
          isScrolled ? "top-0" : "top-[35px]"
        } z-50 w-full bg-white shadow-[0px_12px_12px_rgba(217,217,231,0.3)] px-5 h-[90px] flex justify-between items-center transition-all`}
      >
        <Image
          src="/Hamburger.svg"
          alt="Menu"
          width={30}
          height={30}
          className="md:hidden cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={120}
            height={100}
            className="cursor-pointer"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className={`text-[#6B4226] text-lg hover:text-[#4CAF50] ${
              pathname === "/" ? "act" : "nonact"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`text-[#6B4226] text-lg hover:text-[#4CAF50] ${
              pathname === "/about" ? "act" : "nonact"
            }`}
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            className={`text-[#6B4226] text-lg hover:text-[#4CAF50] ${
              pathname === "/contact" ? "act" : "nonact"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        <a
          href="https://maps.app.goo.gl/vXagejnKvJrhQMAy6"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <Image
            src="/location.svg"
            alt="Location"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </a>
      </header>

      {/* Categories Section (for desktop) */}
      {!isScrolled && !isLoading && !error && (
        <div className="fixed top-[125px] z-40 w-full bg-[#F8EAD8] py-3 shadow-md hidden md:block">
          <div className="container mx-auto px-8">
            <ul className="flex flex-wrap justify-between gap-4 md:gap-6 px-12">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products-category/${encodeURIComponent(
                      category.name
                    )}`}
                    className="text-[#6B4226] hover:text-[#bc8f4b] text-xl transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu with Categories */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white w-72 h-screen transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <Image
            src="/Cross.svg"
            alt="Close"
            width={24}
            height={24}
            className="cursor-pointer hover:rotate-90 transition-transform"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <nav className="p-5 space-y-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="block text-[#6B4226] text-lg hover:text-[#4CAF50]"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-[#6B4226] text-lg hover:text-[#4CAF50]"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block text-[#6B4226] text-lg hover:text-[#4CAF50]"
            >
              CONTACT
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3
              className="text-[#6B4226] font-semibold mb-2 cursor-pointer flex items-center"
              onClick={() => setIsCategoriesVisible(!isCategoriesVisible)}
            >
              Shop by Category
              <Image
                src={isCategoriesVisible ? "/arrowup.svg" : "/dropdown.svg"}
                alt="Toggle Categories"
                width={20}
                height={20}
                className="ml-2 transition-transform duration-300"
              />
            </h3>

            {isCategoriesVisible && (
              <div>
                {isLoading ? (
                  <div className="text-gray-500">Loading categories...</div>
                ) : error ? (
                  <div className="text-red-500">{error}</div>
                ) : (
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/products-category/${encodeURIComponent(
                            category.name
                          )}`}
                          className="block text-[#6B4226] hover:text-[#bc8f4b] pl-2"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
