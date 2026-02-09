import React from "react";
import { useTranslation } from "react-i18next";

const DemoRequest = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.location.href = "https://accountech-frontend.onrender.com/";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="demo">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#3d6e70] mb-4">
          {t("demo.title")}
        </h2>
        <p className="text-gray-600 mb-8">{t("demo.description")}</p>

        <button
          onClick={handleClick}
          className="bg-[#c49e65] text-white px-8 py-4 rounded-xl shadow hover:scale-105 transition text-lg font-semibold"
        >
          {t("demo.submitButton")}
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center italic">
          {t("demo.note")}
        </p>
      </div>
    </section>
  );
};

export default DemoRequest;
