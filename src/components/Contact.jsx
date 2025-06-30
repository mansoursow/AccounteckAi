import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_btzxyy3", // ID du service
        "template_teo5jmk", // ID du template
        form.current,
        "k8C_OgcYJESvpYzj1" // Public Key
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
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#3d6e70] mb-4">
          {t("contact.title")}
        </h2>
        <p className="text-gray-600 mb-12">{t("contact.intro")}</p>

        {formSent ? (
          <p className="text-green-700 text-xl font-semibold">
            ✅ Merci ! Votre message a bien été envoyé.
          </p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="w-full border border-gray-300 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                />
                <User
                  className="absolute left-4 top-3.5 text-[#3d6e70]"
                  size={20}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="w-full border border-gray-300 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                />
                <Mail
                  className="absolute left-4 top-3.5 text-[#3d6e70]"
                  size={20}
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message"
                required
                className="w-full border border-gray-300 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65] resize-none"
              ></textarea>
              <MessageSquare
                className="absolute left-4 top-4 text-[#3d6e70]"
                size={20}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#c49e65] text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
              >
                {t("contact.submit")}
              </button>
            </div>

            {error && (
              <p className="text-red-600 text-center mt-4 font-medium">
                ❌ Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
