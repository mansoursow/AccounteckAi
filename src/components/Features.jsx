import React from "react";
import { Cpu, FileBarChart2, ShieldCheck, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconComponents = [Cpu, FileBarChart2, ShieldCheck, Zap];

const Features = () => {
  const { t } = useTranslation();
  const features = t("features.list", { returnObjects: true }); // 👈 retourne un tableau d'objets

  return (
    <section id="features" className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#3d6e70] mb-6">
          {t("features.title")}
        </h2>
        <p className="text-lg text-gray-600 mb-12">{t("features.intro")}</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconComponents[index];
            return (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-[#c49e65]/50 transition transform hover:-translate-y-1"
              >
                {Icon && (
                  <Icon className="text-[#c49e65] w-12 h-12 mb-4 mx-auto" />
                )}
                <h3 className="text-xl font-semibold text-[#3d6e70] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
