import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import DemoRequest from "./DemoRequest";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t("navbar.home"), to: "hero" },
    { name: t("navbar.features"), to: "features" },
    { name: t("navbar.about"), to: "about" },
    { name: t("navbar.contact"), to: "contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#3d6e70]">
              Accountech AI
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-[#3d6e70] font-medium">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-[#c49e65]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Lang Switcher */}
            <div className="hidden md:flex mr-4">
              <button
                onClick={toggleLanguage}
                className="text-[#3d6e70] hover:text-[#c49e65] text-sm font-medium"
              >
                🌍 {i18n.language === "fr" ? "EN" : "FR"}
              </button>
            </div>

            {/* CTA Button (desktop) */}
            <div className="hidden md:flex">
              <button
                onClick={() => setShowDemoForm(true)}
                className="bg-[#c49e65] text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
              >
                {t("hero.cta")}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-[#3d6e70]">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-[#3d6e70] font-medium cursor-pointer hover:text-[#c49e65]"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                setShowDemoForm(true);
              }}
              className="block w-full text-center bg-[#c49e65] text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
            >
              {t("hero.cta")}
            </button>

            {/* Lang Switcher Mobile */}
            <button
              onClick={toggleLanguage}
              className="block w-full text-center text-[#3d6e70] font-medium mt-4"
            >
              🌍 {i18n.language === "fr" ? "EN" : "FR"}
            </button>
          </div>
        )}
      </nav>

      {/* Modal Démo */}
      {showDemoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative p-6">
            <button
              onClick={() => setShowDemoForm(false)}
              className="absolute top-4 right-4 text-[#3d6e70] text-2xl hover:text-[#c49e65] transition"
            >
              &times;
            </button>
            <div className="overflow-y-auto max-h-[80vh]">
              <DemoRequest />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
