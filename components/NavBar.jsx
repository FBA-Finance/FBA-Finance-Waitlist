"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavPanelWrapper from "@components/NavPanelWrapper";
import Modal from "./Modal";
import GoogleForm from "../app/create-form/GoogleForm";
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle scroll to add blur and full width
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openGoogleForm = () => {
    window.open("https://forms.gle/n2795F4jih9Kf792A", "_blank");
  };

  return (
    <nav
      className={`flex items-center justify-between w-full pt-3 sticky top-0 z-20 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "backdrop-blur-lg bg-white/70 shadow-md w-[100vw] fixed left-0 right-0"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo_fba.svg"
            alt="logo"
            width={120}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* NavPanel for desktop */}
        <div className="hidden lg:block">
          <NavPanelWrapper />
        </div>

        <div className="flex space-x-4 items-center">
          <button
            onClick={openGoogleForm}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hidden sm:block"
          >
            Get Early Access
            <ArrowRight size={24} className="inline-block ml-2" />
          </button>
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-gray-600 dark:hover:bg-indigo-600 dark:hover:text-gray-200 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
          <Modal isOpen={showModal} onClose={handleCloseModal}>
            <GoogleForm onClose={handleCloseModal} />
          </Modal>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white white:bg-white-100">
          <div className="p-4">
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <NavPanelWrapper onLinkClick={closeMobileMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
