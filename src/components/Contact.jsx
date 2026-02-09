import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare, Phone, Linkedin } from "lucide-react";
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
        "service_btzxyy3",
        "template_teo5jmk",
        form.current,
        "k8C_OgcYJESvpYzj1",
      )
      .then(
        () => {
          setFormSent(true);
          setError(false);
        },
        (err) => {
          console.error("EmailJS error:", err);
          setError(true);
        },
      );
  };

  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#2f4f52] text-white pt-24 pb-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#e0cfb7] mb-5">
            {t("contact.title")}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("contact.intro")}
          </p>
        </div>

        {/* FORMULAIRE */}
        <div className="max-w-3xl mx-auto">
          {formSent ? (
            <p className="text-green-400 text-xl font-medium text-center tracking-wide">
              {t("form.success")}
            </p>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="grid gap-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("form.name")}
                    required
                    className="w-full bg-[#3d6e70] border border-[#72928f]/70 text-white placeholder-gray-300 rounded-2xl py-3.5 px-4 pl-12 text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                  />
                  <User
                    className="absolute left-4 top-3.5 text-[#e0cfb7]"
                    size={20}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("form.email")}
                    required
                    className="w-full bg-[#3d6e70] border border-[#72928f]/70 text-white placeholder-gray-300 rounded-2xl py-3.5 px-4 pl-12 text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                  />
                  <Mail
                    className="absolute left-4 top-3.5 text-[#e0cfb7]"
                    size={20}
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  placeholder={t("form.message")}
                  required
                  className="w-full bg-[#3d6e70] border border-[#72928f]/70 text-white placeholder-gray-300 rounded-2xl py-3.5 px-4 pl-12 text-sm tracking-wide resize-none focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                />
                <MessageSquare
                  className="absolute left-4 top-4 text-[#e0cfb7]"
                  size={20}
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-[#c49e65] text-[#2f4f52] px-10 py-3.5 rounded-2xl font-semibold tracking-wide shadow-xl hover:scale-105 transition"
                >
                  {t("contact.submit")}
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-center mt-4 font-medium tracking-wide">
                  {t("form.error")}
                </p>
              )}
            </form>
          )}
        </div>

        {/* INFOS DE CONTACT */}
        <div className="mt-24 border-t border-[#72928f]/40 pt-12 text-center space-y-7">
          <p className="text-xl font-semibold tracking-wide text-[#e0cfb7]">
            {t("footer.directContact")}
          </p>

          <div className="flex flex-col items-center gap-4 text-gray-200 text-sm tracking-wide">
            <a
              href="tel:+221775860829"
              className="flex items-center gap-2 hover:text-[#c49e65] transition"
            >
              <Phone size={18} />
              +221 77 586 08 29
            </a>

            <a
              href="mailto:mouhamadoumansoursow@yahoo.com"
              className="flex items-center gap-2 hover:text-[#c49e65] transition"
            >
              <Mail size={18} />
              mouhamadoumansoursow@yahoo.com
            </a>

            <a
              href="https://www.linkedin.com/company/accountech-ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#c49e65] transition"
            >
              <Linkedin size={18} />
              {t("footer.linkedin")}
            </a>
          </div>

          {/* PARTENARIAT */}
          <p className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            {t("footer.partnership")}{" "}
            <span className="font-semibold text-[#e0cfb7]">
              {t("footer.partner")}
            </span>
          </p>

          {/* COPYRIGHT */}
          <p className="pt-6 text-xs text-gray-400 tracking-wider">
            © {new Date().getFullYear()} AccounTech IA — {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
