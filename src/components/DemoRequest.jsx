import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Building, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const DemoRequest = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_btzxyy3",
        "template_teo5jmk",
        form.current,
        "k8C_OgcYJESvpYzj1"
      )
      .then(
        () => {
          setFormSent(true);
          setError(false);
        },
        (error) => {
          console.error("Erreur EmailJS :", error);
          setError(true);
        }
      );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="demo">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#3d6e70] mb-4">
          {t("demo.title")}
        </h2>
        <p className="text-gray-600 mb-8">{t("demo.description")}</p>

        {formSent ? (
          <p className="text-green-700 text-xl font-semibold">
            {t("demo.confirmationText")}
          </p>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-6 text-left"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="user_company"
                  placeholder={t("demo.companyPlaceholder")}
                  required
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                />
                <Building
                  className="absolute left-4 top-3.5 text-[#3d6e70]"
                  size={20}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  placeholder={t("demo.emailPlaceholder")}
                  required
                  className="w-full border border-gray-300 bg-white text-gray-800 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                />
                <Mail
                  className="absolute left-4 top-3.5 text-[#3d6e70]"
                  size={20}
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="user_phone"
                placeholder={t("demo.phonePlaceholder")}
                required
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
              />
              <Phone
                className="absolute left-4 top-3.5 text-[#3d6e70]"
                size={20}
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder={t("demo.messagePlaceholder")}
                required
                className="w-full border border-gray-300 bg-white text-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#c49e65] resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#c49e65] text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
              >
                {t("demo.submitButton")}
              </button>
            </div>

            {error && (
              <p className="text-red-600 text-center mt-4 font-medium">
                {t("demo.errorMessage")}
              </p>
            )}

            <p className="text-sm text-gray-500 mt-4 text-center italic">
              {t("demo.note")}
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoRequest;
