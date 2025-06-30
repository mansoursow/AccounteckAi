import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div>
          <h2 className="text-4xl font-bold text-[#3d6e70] mb-6">
            {t("about.title")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {t("about.p1")}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("about.p2")}
          </p>
        </div>

        {/* Image illustrative */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <img
            src="/images/about-accountech.png"
            alt="À propos Accountech AI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d6e70]/80 to-[#c49e65]/40 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
