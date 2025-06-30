import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import DemoRequest from "./DemoRequest";

const Hero = () => {
  const videoRef = useRef(null);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const { t } = useTranslation(); // 👈 hook i18n

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/video.mp4"
        autoPlay
        muted
        loop
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d6e70]/60 to-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-2xl px-6 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#e0cfb7]">
          {t("hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#cf9077] mb-6">
          {t("hero.description")}
        </p>
        <button
          onClick={() => setShowDemoForm(true)}
          className="bg-[#c49e65] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:scale-105 transition-transform"
        >
          {t("hero.cta")}
        </button>
      </div>

      {/* Modal DemoRequest */}
      {showDemoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative p-6">
            {/* Close button */}
            <button
              onClick={() => setShowDemoForm(false)}
              className="absolute top-4 right-4 text-[#3d6e70] text-2xl hover:text-[#c49e65] transition"
            >
              &times;
            </button>

            {/* Demo Request Form */}
            <div className="overflow-y-auto max-h-[80vh]">
              <DemoRequest />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
