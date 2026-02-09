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
        () => setError(true),
      );
  };

  return (
    <footer
      id="contact"
      className="relative z-10 bg-gradient-to-br from-[#1f3b3e] via-[#2f4f52] to-[#3d6e70] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#e0cfb7] mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("contact.intro")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* FORM */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {formSent ? (
              <p className="text-green-300 text-xl font-medium text-center">
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
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-xl py-3.5 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
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
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-xl py-3.5 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
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
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-xl py-3.5 px-4 pl-12 resize-none focus:outline-none focus:ring-2 focus:ring-[#c49e65]"
                  />
                  <MessageSquare
                    className="absolute left-4 top-4 text-[#e0cfb7]"
                    size={20}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#c49e65] text-[#1f3b3e] py-3.5 rounded-xl font-semibold tracking-wide shadow-xl hover:scale-105 transition"
                >
                  {t("contact.submit")}
                </button>

                {error && (
                  <p className="text-red-300 text-center font-medium">
                    {t("form.error")}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* CONTACT INFOS */}
          <div className="space-y-8 text-gray-200">
            <h3 className="text-2xl font-semibold text-[#e0cfb7]">
              {t("footer.directContact")}
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} /> +221 77 586 08 29
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} /> +221 77 373 17 29
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} /> mouhamadoumansoursow@yahoo.com
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} /> mansoursow@accountech-ai.com
              </div>

              <a
                href="https://www.linkedin.com/company/accountech-ia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#c49e65] transition"
              >
                <Linkedin size={18} /> {t("footer.linkedin")}
              </a>
            </div>

            <p className="text-sm leading-relaxed max-w-md">
              {t("footer.partnership")}{" "}
              <span className="font-semibold text-[#e0cfb7]">
                {t("footer.partner")}
              </span>
            </p>
          </div>
        </div>

        {/* FOOT */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center text-xs text-gray-300 tracking-wider">
          © {new Date().getFullYear()} AccounTech AI — {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
